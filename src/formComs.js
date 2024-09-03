import auto from "./auto";
import {ejecutarComando} from "./comandos";

function comandosComp(coms){
    var limites;
    var coordenadas;
    var movAuto;
    var comandos = coms + "";
    comandos = comandos.split("/");
    limites = comandos[0];
    coordenadas = comandos[1];
    movAuto = comandos[2];
    const automovil = new auto(coordenadas,limites);
    return [automovil, movAuto];
}
export default comandosComp;