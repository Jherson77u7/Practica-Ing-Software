import posAuto from "./posicionAuto";
import auto from "./auto";

describe("Posicion del auto", () => {
    it("Deberia mostrar en coordenadas x, y la posicion del auto", () => {
      expect(posAuto("1,2")).toEqual("Formato incorrecto");
    });
    it("Solo permite cadenas", () => {
        expect(posAuto(88)).toEqual("Formato incorrecto");
    });
    it("Solo permite el formato establecido: 'x,y' ", () => {
        expect(posAuto("1,2")).toEqual("Formato incorrecto");
    });
    
});