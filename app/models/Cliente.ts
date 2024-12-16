import { Tarjeta } from "./Tarjeta";
export class Cliente {
    id : number;
    tarjeta : Tarjeta;
    nombre : string;

    constructor(tarjeta: Tarjeta, nombre: string){
        this.nombre = nombre;
        this.tarjeta = tarjeta;
        this.id = Date.now();
    }

    solicitarOperacion(){
        
    }
}