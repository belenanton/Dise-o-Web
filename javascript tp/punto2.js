// Obtiene todos los elementos con la clase 'elemento'
  var elementos = document.querySelectorAll('.elemento');

  // Función para cambiar el estilo
  function cambiarEstilo(e) {
    e.target.style.backgroundColor = e.target.style.backgroundColor === 'yellow' ? '' : 'yellow';
    e.target.style.fontSize = e.target.style.fontSize === '24px' ? '' : '24px';
  }

  // Añade el evento 'click' a cada elemento
  elementos.forEach(function(elemento) {
    elemento.addEventListener('click', cambiarEstilo);
  });