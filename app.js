/**

La letra "a" es convertida para "ai"
 La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
 */
function verificar() {
    let cadena = document.querySelector('#decifrar').value;
    let cadenasABuscar = ["ai", "enter", "imes", "ober", "ufat"];
    let encontrado = false;

    for (let palabra of cadenasABuscar) {
      if (cadena.toLowerCase().includes(palabra)) {
        encontrado = true;
        break;
      }
    }

    if (encontrado) {
      document.querySelector('#desencriptar').removeAttribute('disabled');
    } else {
      document.querySelector('#desencriptar').setAttribute('disabled', 'true');
    }
  }


function encriptar(){
    
    let cadena = a(document.querySelector('#decifrar').value);
    changeContenedor();

    const contenidoSalida = document.querySelector('.contenido-salida');

    let respuesta = document.createElement('p');
    respuesta.textContent=cadena;
    respuesta.id = "textoResuelto"
    
    contenidoSalida.style.fontSize = '1.5rem';
    contenidoSalida.appendChild(respuesta);    
}

function desencriptar(){
    let cadena = b(document.querySelector('#decifrar').value);
    changeContenedor();
    console.log(cadena)

    const contenidoSalida = document.querySelector('.contenido-salida');

    let respuesta = document.createElement('p');
    respuesta.textContent=cadena;
    respuesta.id = "textoResuelto"
    
    contenidoSalida.style.padding = '10%';
    contenidoSalida.style.fontSize = '1.5rem';
    contenidoSalida.appendChild(respuesta);
}

function changeContenedor(){
    const contenidoSalida = document.querySelector('.salida');

    //let boton = contenidoSalida.querySelector('button');
    let boton = document.querySelector('#copiar');
    // Ocultar elementos
    contenidoSalida.style.display ="none"
  
    // Agregar botón fuera del contenedor
    boton.setAttribute('style', 'visibility: visible');

    if(document.querySelector('#textoResuelto')){
        document.querySelector('#textoResuelto').remove()
    }

}

function a(textoEncriptar){
    let textoPalabras = textoEncriptar.split('') 
    console.log(textoPalabras)
    for(let i = 0; i < textoPalabras.length;i++){
        if(textoPalabras[i]=="a"){
            textoPalabras[i] = "ai"
        }else if(textoPalabras[i]=="e"){
            textoPalabras[i]="enter"
        }else if(textoPalabras[i]=="i"){
            textoPalabras[i]="imes"
        }else if(textoPalabras[i]=="o"){
            textoPalabras[i]="ober"
        }else if(textoPalabras[i]=="u"){
            textoPalabras[i]="ufat"
        }
    }
    return(textoPalabras.join(''))
}

function b(textoEncriptado){
    let textoDesencriptado = textoEncriptado
   .replace(/ai/g, 'a')
   .replace(/enter/g, 'e')
   .replace(/imes/g, 'i')
   .replace(/ober/g, 'o')
   .replace(/ufat/g, 'u');
    
    return textoDesencriptado

}

function remove(){
    document.querySelector('#textoResuelto').remove();
}

function copiar(){
    navigator.clipboard.writeText(document.getElementById('textoResuelto').textContent);
    alert('texto copiado')
  }