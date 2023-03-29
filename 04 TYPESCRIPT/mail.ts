export enum TipoMail { Personal = "Personal", Casa = "Casa", Trabajo = "Trabajo", Otros = "Otros"}

export class Mail {
    private _tipo: TipoMail;
    private _direccion: string;
    constructor(tipo: TipoMail, direccion: string){
        this._tipo = tipo;
        this._direccion = direccion;
    }

    public get tipo(): TipoMail {
        return this._tipo;
    }
    public set tipo(value: TipoMail) {
        this._tipo = value;
    }

    public get direccion(): string {
        return this._direccion;
    }
    public set direccion(value: string) {
        this._direccion = value;
    }
}