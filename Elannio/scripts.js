// app.js
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

// Configuração de middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Configuração da estratégia de autenticação local
passport.use(new LocalStrategy((username, password, done) => {
    // Implemente a lógica de autenticação aqui (por exemplo, consultando um banco de dados)
    if (username === 'usuario' && password === 'senha') {
        return done(null, { id: 1, username: 'usuario' });
    } else {
        return done(null, false, { message: 'Login inválido' });
    }
}));

// Serialização e desserialização do usuário
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    // Consulte o banco de dados ou sistema de armazenamento para obter informações do usuário
    done(null, { id: 1, username: 'usuario' });
});

// Rotas
const routes = require('./routes');
app.use('/', routes);

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor em execução na porta ${port}`);
});
