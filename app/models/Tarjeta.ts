export class Tarjeta{
    numTarjeta;
    PIN;

    constructor(numTarjeta: string, PIN: number){
        this.numTarjeta = numTarjeta;
        this.PIN = PIN;
    }

    validarPIN(PIN: number) : boolean {
        return PIN === this.PIN 
    }
    
}