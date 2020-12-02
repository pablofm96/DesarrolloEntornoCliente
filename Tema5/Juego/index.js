/*class Juego{
    constructor(div){

    }

}*/


class Bola{
    constructor(radio, posX, posY, velX, velY, color, svgId){
        this.radio = radio;
        this.posX = posX;
        this.posY = posY;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        
        this.cir = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.cir.setAttributeNS(null, "cx", this.posX);
        this.cir.setAttributeNS(null, "cy", this.posY);
        this.cir.setAttributeNS(null, "r", this.radio);
        this.cir.setAttributeNS(null, "fill", this.color);
        svgId.appendChild(this.cir);
    }

    animaBolas(ancho, alto){
        this.posX += this.velX;
        this.posY += this.velY;

        if (this.posY-this.radio<=0 || this.posY+this.radio >= alto){
            this.velY *= -1;
            this.posY = (this.posY-this.radio <= 0) ? this.radio: alto-this.radio;
        }
    }

    dibujar()
    {
        this.cir.setAttributeNS(null, "cx", this.posX);
        this.cir.setAttributeNS(null, "cy", this.posY);
    }

    colisionPalo(){
        let derecha = document.getElementById("derecha");
        let izquierda = document.getElementById("izquierda");

       if (this.posX >=derecha.x.animVal.value-this.radio && this.posX <=derecha.x.animVal.value+derecha.width.animVal.value && this.posY+this.radio>=derecha.y.animVal.value && this.posY-this.radio<=(derecha.y.animVal.value+derecha.height.animVal.value)){
            this.velX *= -1;
            //this.velX-=1;
            /*if(Math.round(Math.random())*3==3){
                if(this.velY>0){
                    this.velY+=1;
                    if(this.velY>4)this.velY=4;
                }else{
                    this.velY+=-1;
                    if(this.velY<-4)this.velY=-4;
                 }
            }*/
        }

        if (this.posX-this.radio<=izquierda.x.animVal.value+izquierda.width.animVal.value && this.posX >=izquierda.x.animVal.value && this.posY+this.radio>=izquierda.y.animVal.value && this.posY-this.radio<=izquierda.y.animVal.value+izquierda.height.animVal.value){
            this.velX*=-1;
            //this.velX+=1;
            /*if(Math.round(Math.random())*3==3){
                if(this.velY>0){
                    this.velY+=1;
                    if(this.velY>4)this.velY=4;
                }else{
                    this.velY+=-1;
                }
            }*/
        }
    }

    marcarGol(ancho){
        
        if (this.posX < 0){
            this.posX =  ancho/2;
            this.velX *= -1;
            this.velY *= -1; 
        }
        
        if (this.posX>ancho){
            this.posX = ancho/2;
            this.velX *= -1;
            this.velY *= -1;
        }

    }


}

class Palo{
    constructor(posX, posY, color, ancho, alto, svgId, id){
        this.posX = posX;
        this.posY = posY;
        this.color = color;
        this.ancho = ancho;
        this.alto = alto;
        this.svgId = svgId;
        this.id = id;

        this.linea = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.linea.setAttributeNS(null, "x", this.posX);
        this.linea.setAttributeNS(null, "y", this.posY);
        this.linea.setAttributeNS(null, "width", this.ancho);
        this.linea.setAttributeNS(null, "height", this.alto);
        this.linea.setAttributeNS(null, "fill", this.color);
        this.linea.setAttributeNS(null, "id", this.id);
        this.svgId.appendChild(this.linea);
    }

    mover(){
        this.moverPalo()
    }
    moverPalo(e, tecla1, tecla2, alto){

        if (e.code == tecla1){
            this.posY -= 5;
            this.dibuja();
        }

        if (e.code == tecla2){
            this.posY += 5;
            this.dibuja();
        }

        if (this.posY <= 0){
            this.posY = 0;
            this.dibuja();
        }

        if (this.posY >= parseInt(alto)-120){
            this.posY = parseInt(alto)-120;
        }
    } 

    dibuja(){
        this.linea.setAttributeNS(null, "y", this.posY);
    }
    

}

window.onload = function(){
    
    let svg = document.getElementById("cont");
    let tamanoSVG = svg.getBoundingClientRect();
    palo = new Palo(0, (tamanoSVG.height/2)-10,  "red", 20, 120,  svg, "izquierda");
    palo2 = new Palo((tamanoSVG.width-20), (tamanoSVG.height/2-10), "black", 20, 120, svg, "derecha");
    bola = new Bola(10, 20, 20, 5, 5, "red", svg);
    document.addEventListener("keydown",function(event){
        if (event.code == "KeyW" || event.code == "KeyS"){
            palo.moverPalo(event, "KeyW", "KeyS", tamanoSVG.height);
        }
        if (event.code == "ArrowUp" || event.code == "ArrowDown"){
        palo2.moverPalo(event, "ArrowUp", "ArrowDown", tamanoSVG.height);
        }   
    });
    mover = window.requestAnimationFrame(repetir);    
}

function repetir(){
    let svg = document.getElementById("cont");
    let tamanoSVG = svg.getBoundingClientRect();
    bola.animaBolas(tamanoSVG.width, tamanoSVG.height);
    bola.colisionPalo();
    bola.marcarGol(tamanoSVG.width);
    bola.dibujar();
    mover = window.requestAnimationFrame(repetir);
}
