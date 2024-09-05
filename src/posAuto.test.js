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
    it("Solo permite el formato establecido: 'x,y' " , () => {
        expect(posAuto("1/2")).toEqual("Formato incorrecto");
    });
    it("Se añade la orientacion N en la posicion inicial, y solo deja ingresar un formato establecido x,yN" , () => {
        expect(posAuto("2,5N")).toEqual("2,5N");
    });
    it("Se añade la orientacion S en la posicion inicial, y solo deja ingresar un formato establecido x,yS" , () => {
        expect(posAuto("2,5S")).toEqual("2,5S");
    });
});