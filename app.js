let numeroSecreto = 0;
let intentos = 0;
console.log(numeroSecreto);
function elemntoDeTexto(etiqueta, texto) {
    let elementoHtml = document.querySelector(etiqueta);
    elementoHtml.innerHTML = texto;
}
function intentosDeUsuario() {
    verificacionIntentos();
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function limpiarCaja(params) {
    document.querySelector('#numeroUsuario').value = '';
}


function condicionesIniciales(){
    elemntoDeTexto('h1','JUEGO DEL NÚMERO SECRETO');
    elemntoDeTexto('p','escribe un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de rango de numeros
    //generar el número aleatorio
    //inicializar número de intentos
    condicionesIniciales();
    // habilitar el disabled del boton nuevio juego.
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

function verificacionIntentos() {
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    console.log(intentos);
    if (numeroSecreto === numeroUsuario) {
        elemntoDeTexto('p',`Acertaste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }else{
        if (intentos <= 2) {
            elemntoDeTexto('p','No acertaste pero sigue intentando');
        } else {
            elemntoDeTexto('p','perdiste pero puede volver a jugar');
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        
    }
    intentos++;
    limpiarCaja();
    return;
    
}
condicionesIniciales();


/*function clickBoton() {
    console.log('el boton console fue clikeado')
}*/