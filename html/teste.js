const uploadButton = document.getElementById('uploadButton');
const profileImage = document.getElementById('profileImage');

uploadButton.addEventListener('change', function () {
  const file = uploadButton.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    // Se nenhum arquivo for selecionado, volta para a foto padrão
    profileImage.src = 'default-avatar.png';
  }
});
