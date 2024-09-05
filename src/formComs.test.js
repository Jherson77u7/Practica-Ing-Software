import { ejecutarComando } from "./comandos";
import comandosComp from "./formComs";
describe("Formato completo para mover el auto", () => {
    it("Ejecuta el formato completo para mover el auto", () => {
        const [automovil, coms] = comandosComp("5,5/3,3E/AADAADADDA");
        ejecutarComando(coms,automovil);
        expect(automovil.mostrarPosicion()).toEqual("5,1E");
        expect(coms).toEqual("AADAADADDA");
    });
});