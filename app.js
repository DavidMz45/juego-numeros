let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
var numeroMaximo = 10; // Máximo número secreto

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  console.log(intentos);
  if (numeroSecreto === numeroUsuario) {
    asignarTextoElemento(
      "p",
      `¡Felicidades! Has adivinado el número secreto en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }.`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroSecreto > numeroUsuario) {
      asignarTextoElemento(
        "p",
        "El número secreto es mayor que " + numeroUsuario
      );
    } else {
      asignarTextoElemento(
        "p",
        "El número secreto es menor que " + numeroUsuario
      );
    }
    intentos++;
    limpiarCaja();
  }
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  if (listaNumerosSorteados.length >= numeroMaximo) {
    asignarTextoElemento("p", "Todos los números han sido sorteados.");
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Inserta número secreto entre 1 y ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  console.log(numeroSecreto);
  console.log(listaNumerosSorteados);
  intentos = 1;
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //indicar mensaje de inicio
  condicionesIniciales();
  //generar numero aleatorio
  //desabilitar boton reiniciar
  //limpiar intentos
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
