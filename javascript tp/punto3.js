function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var mensajesError = [];

    if(nombre === '') mensajesError.push('El campo Nombre es obligatorio.');

    if(email === '') mensajesError.push('El campo Email es obligatorio.');
    
    if(password === '') mensajesError.push('El campo Contraseña es obligatorio.');

    if(mensajesError.length > 0) {
      alert(mensajesError.join('//n'));
      return false;
    }

    return true;
  }