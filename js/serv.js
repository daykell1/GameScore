const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

// ...

app.use(session({
  secret: '2323',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

// Configura a estratégia de autenticação local
passport.use(new LocalStrategy(
  { usernameField: 'email' }, // 
  (email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Usuário não encontrado.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Senha incorreta.' });
      }
      return done(null, user);
    });
  }
));

// Serialize e deserialize o usuário para a sessão
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
