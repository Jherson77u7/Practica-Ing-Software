class auto{
    constructor(cadena, limites="-1,-1"){
  
        var orientacion = cadena[cadena.length-1];
        var cad = cadena + "";
        cad = cad.substring(0, cad.length - 1);
        var coordenadas = cad.split(",");
        var posX = coordenadas[0];
        var posY = coordenadas[1];
        posX = parseInt(posX);
        posY = parseInt(posY);
        

        var lim = limites + "";
        lim = lim.split(",");
        var limX = lim[0];
        var limY = lim[1];
        limX = parseInt(limX);
        limY = parseInt(limY);
  
        //atributos clase
        this.posX=posX;
        this.posY=posY;
        this.orientacion=orientacion;
        this.limX=limX;
        this.limY=limY;
    }
    get getPosX(){
        return this.posX;
    }
    get getPosY(){
        return this.posY;
    }
    get getOrientacion(){
        return this.orientacion;
    }
    get getLimX(){
        return this.limX;
    }
    get getLimY(){
        return this.limY;
    }

    set setPosX(aumento){
        this.posX += aumento;
    }
    set setPosY(aumento){
        this.posY += aumento;
    }
    set setOrientacion(newOrientacion){
        this.orientacion = newOrientacion ;
    }
    mostrarPosicion(){
        const posicion = this.posX + "," + this.posY + this.orientacion;
        return posicion;
    }

}

export default auto;



