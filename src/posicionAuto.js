import auto from "./auto";

function verificarFormato(cadena){
    var result = false;
    if(typeof cadena == "string"){
        var formatoValido = /^\d+,\d+[NSOE]$/;
        if(formatoValido.test(cadena))
        {
            result = true;
        }
    }
    return result;
}
function posAuto(coordenadas){
    var pos;
    if(verificarFormato(coordenadas)){
        pos = coordenadas;
    }
    else{
        pos = "Formato incorrecto";
    }
    return pos;
}

export default posAuto;



