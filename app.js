function encriptar(){
    changeContenedor()
    
}

function desencriptar(){
    changeContenedor()
}

function changeContenedor(){
    const contenidoSalida = document.querySelector('.contenido-salida');
    const imagen = contenidoSalida.querySelector('img');
    const titulo = contenidoSalida.querySelector('h1');
    const texto = contenidoSalida.querySelector('p');
    //const boton = contenidoSalida.querySelector('button');
    const boton = document.querySelector('#copiar');
    // Ocultar elementos
    imagen.style.display = 'none';
    titulo.style.display = 'none';
    texto.style.display = 'none';
  
    // Agregar botón fuera del contenedor
    boton.setAttribute('style', 'visibility: visible');

    // modifica el contenudo-salida
    contenidoSalida.style.width='100%'
    
}