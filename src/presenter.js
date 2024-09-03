
import { parseCommand, moveCar } from "./app.js";

const form = document.querySelector("#comandos-form");
const commandInput = document.querySelector("#comando");
const posicionInicial = document.querySelector("#posicion-inicial");
const comandosEjecutados = document.querySelector("#comandos-ejecutados");
const posicionFinal = document.querySelector("#posicion-final");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = commandInput.value;
  const { grid, car, commands } = parseCommand(input);

  
  posicionInicial.textContent = `${car.x},${car.y}${car.direction}`;

  comandosEjecutados.textContent = commands.join('');

  const finalPosition = moveCar(grid, car, commands);
  posicionFinal.textContent = `${finalPosition.x},${finalPosition.y}${finalPosition.direction}`;
});
