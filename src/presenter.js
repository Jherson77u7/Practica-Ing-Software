import posAuto from "./posicionAuto";
import {comsAuto,ejecutarComando} from "./comandos";
import auto from "./auto";
import comandosComp from "./formComs";

const comandosAuto = document.querySelector("#coms-auto");
const form = document.querySelector("#controlador-auto");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const comandos = comandosAuto.value;
  const [automovil, coms] = comandosComp(comandos);

  div.innerHTML = "<p>" + "Posicion Inicial: " + automovil.mostrarPosicion() + "</p>";
  div.innerHTML += "<p>" + "Comandos: " + coms + "</p>";
  ejecutarComando(coms,automovil);
  div.innerHTML += "<p>" + "Posicion Final: " + automovil.mostrarPosicion() + "</p>";
});

