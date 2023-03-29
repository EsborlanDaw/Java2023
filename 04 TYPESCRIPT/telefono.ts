
export enum TipoTeléfono { Personal = "Personal", Casa = "Casa", Trabajo = "Trabajo", Otros = "Otros"}

export class Teléfono {
    private _tipo: TipoTeléfono;
    private _numero: number;

    constructor(tipo: TipoTeléfono, numero: number){
        this._tipo = tipo;
        this._numero = numero;
    }

    public get tipo(): TipoTeléfono {
        return this._tipo;
    }
    public set tipo(value: TipoTeléfono) {
        this._tipo = value;
    }

    public get numero(): number {
        return this._numero;
    }
    public set numero(value: number) {
        this._numero = value;
    }
}