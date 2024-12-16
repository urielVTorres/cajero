

export class Cajero{
    id;
    ubicacion;
    status;
    constructor(ubicacion : string, status : boolean){
        this.ubicacion = ubicacion;
        this.status = status;
        this.id = Date.now();
    }

    autenticarUsuario(cliente: string){

    }

    procesarTransaccion(){

    }

    conteoEfectivo(){

    }

    mostrarBalance(){

    }

    consultarSaldo(){

    }

    autenticarPin(){

    }
}