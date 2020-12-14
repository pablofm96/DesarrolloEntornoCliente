
class Bola{
    constructor (posX, posY, velX, velY, radio, color, svgId){
        this.posX = posX;
        this.posY = posY;
        this.velX = velX;
        this.velY = velY;
        this.radio = radio;
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

        if (this.posX-this.radio<=0 || this.posX+this.radio >= ancho){
            this.velX *= -1;
            this.posX = (this.posX-this.radio <= 0) ? this.radio: ancho-this.radio;
        }

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


    colisiones(otraBola){
        this.posAnteriorX = this.posX;
        this.posAnteriorY = this.posY;

        let dx = this.posX - otraBola.posX;
        let dy = this.posY - otraBola.posY;
        let distancia = Math.sqrt(dx * dx + dy * dy);

        if (distancia < this.radio + otraBola.radio) {
            this.velX *=-1;
            this.velY *= -1;

            this.posX = this.posAnteriorX;
            this.posY = this.posAnteriorY;
        }
    }
}

var bolas= new Array();
var svg;
window.onload = function(){
    
    svg = document.getElementById("cont")
    
    for (let i=0; i<15; i++){
        bolas.push(new Bola(numeroAleatorio(80,850), numeroAleatorio(80,850), numeroAleatorio(1, 30), numeroAleatorio(1,30), numeroAleatorio(10,60), color(), svg));
    }
    mover = window.requestAnimationFrame(repetir)
}

function repetir()
  {
      tamanoSVG = svg.getBoundingClientRect();
      for (let i=0; i<bolas.length; i++)
      {
        bolas[i].animaBolas(tamanoSVG.width, tamanoSVG.height);

        for (let j=0; j<bolas.length; j++)
            if (i!=j) bolas[i].colisiones(bolas[j]);
        
          bolas[i].dibujar();
      }
      mover = window.requestAnimationFrame(repetir);
  }

  function numeroAleatorio(min, max){
      return Math.floor(Math.random()*(max-min))+min;
  }

  function color(){
      return "#"+Math.floor(Math.random()*16777215).toString(16);
  }