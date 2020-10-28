class Player{
    
    constructor(nombre){
        this.nombre = nombre
        this.victorias = 0;
        this.derrotas = 0
        this.movimiento = '';
    }
    
}

class Game{
    constructor (){
        this.player1;
        this.player2;
    }

    turno(jugador){
        let resultado = prompt(jugador+" introduce piedra, papel o tijera");
        return resultado;
    }

    jugar(turno1, turno2){
        if (turno1 == 'piedra' && turno2 == 'piedra'){
            alert = "Empate";
        }else if(this.turno1 === 'piedra' && this.turno2 === 'tijera'){
            alert ="Gana el primer jugador";
            this.player1.victorias++;
            this.player2.derrotas++;
        }else if(this.turno1 === 'piedra' && this.turno2 === 'papel'){
            alert="Gana el segundo jugador";
            this.player2.victorias++;
            this.player1.derrotas++;
        }else if(this.turno1 === 'papel' && this.turno2 === 'piedra'){
            alert= "Gana el primer jugador";
            this.player1.victorias++;
            this.player2.derrotas++;
        }else if(this.turno1 === 'papel' && this.turno2 === 'tijera'){
            alert= "Gana el segundo jugador";
            this.player2.victorias++;
            this.player1.derrotas++;
        }else if(this.turno1 === 'papel' && this.turno2 === 'papel'){
            alert= "Empate";
        }else if(this.turno1 === 'tijera' && this.turno2 === 'piedra'){
            alert= "Gana el segundo jugador";
            this.player2.victorias++;
            this.player1.derrotas++;
        }else if(this.turno1 === 'tijera' && this.turno2 === 'tijera'){
            alert= "Empate";
        }else if(this.turno1 === 'tijera' && this.turno2 === 'papel'){
            alert= "Gana el segundo jugador";
            this.player1.victorias++;
            this.player2.derrotas++;
        }
    }

}

let jugador1 = new Player("Pepe");
let jugador2 = new Player("Paco");
let juego = new Game();
let turno1 = juego.turno(jugador1.nombre);
let turno2 = juego.turno(jugador2.nombre);
juego.jugar(turno1, turno2);