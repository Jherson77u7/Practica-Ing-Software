import {comsAuto,ejecutarComando} from "./comandos";
import auto from "./auto";

describe("Comandos para mover el auto", () => {
    it("Deberia mostrar los comandos para el movimiento del auto(Avanzar, Derecha, Izquierda)", () => {
      expect(comsAuto("ADI")).toEqual("ADI");
    });
 



});