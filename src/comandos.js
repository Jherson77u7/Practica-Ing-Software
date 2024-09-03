import auto from "./auto";

function verificarFormatoAuto(comandos){
    var result = false;
    if(typeof comandos == "string"){
        var formatoComs = /^[IDA]+$/;
        if(formatoComs.test(comandos)){
            result = true;
        }
    }
    return result;
}
export function ejecutarComando(comandos, automovil){
    const puntosCardinales = "NOSE";
    var coms = comandos + "";
    for(var i = 0; i < coms.length; i++){
        if(coms[i] == "I"){
            var posBusqueda = puntosCardinales.indexOf(automovil.getOrientacion);
            if(posBusqueda != puntosCardinales.length-1){
                automovil.setOrientacion = puntosCardinales[posBusqueda+1]+"";
            }
            else{
                automovil.setOrientacion = puntosCardinales[0]+"";
            }
        }
        else if(coms[i] == "D"){
            var posBusqueda = puntosCardinales.indexOf(automovil.getOrientacion);
            if(posBusqueda != 0){
                automovil.setOrientacion = puntosCardinales[posBusqueda-1]+"";
            }
            else{
                automovil.setOrientacion = puntosCardinales[puntosCardinales.length-1]+"";
            }
        }
        else if(coms[i] == "A"){
            if(automovil.getOrientacion == "N"){
                if(automovil.getLimY == -1 || automovil.getPosY+1 <= automovil.getLimY){
                    automovil.setPosY = 1;
                }
            }
            else if(automovil.getOrientacion == "E"){
                if(automovil.getLimX == -1 || automovil.getPosX+1 <= automovil.getLimX)
                automovil.setPosX = 1;
            }
            else if(automovil.getOrientacion == "S"){
                if(automovil.getLimY == -1 || automovil.getPosY-1 >= 0){
                    automovil.setPosY = -1;
                }
            }
            else if(automovil.getOrientacion == "O"){
                if(automovil.getLimY == -1 || automovil.getPosX-1 >= 0){
                    automovil.setPosX = -1;
                }
            }
        }
    }
    return comandos;
}

export function comsAuto(comandos){
    var coms;
    if(verificarFormatoAuto(comandos)){
        coms = comandos;
    }
    else{
        coms = "Formato incorrecto";
    }
    return coms;
}
