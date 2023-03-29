import { Dirección } from "./direccion"
import { Mail } from "./mail"
import { Teléfono, TipoTeléfono } from "./telefono"

export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string;
    private _cumpleaños: Date;
    private _colorFavorito: string;
    private _sexo: string;
    private _direcciones: Dirección[];
    private _mails: Mail[];
    private _telefonos: Teléfono[];
    private _notas?: any;

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleaños: Date, colorFavorito: string, sexo: string, direcciones: Dirección[], mails: Mail[],
        telefonos: Teléfono[], notas?: any) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleaños = cumpleaños;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }

    añadirDireccion(nuevaDireccion: Dirección) {
        this._direcciones.push(nuevaDireccion);
    }

    añadirMail(nuevoEmail: Mail) {
        this._mails.push(nuevoEmail);
    }

    añadirTelefono(nuevoTelefono: Teléfono) {
        this._telefonos.push(nuevoTelefono);
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get apellidos(): string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos = value;
    }

    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }
   
    public get dni(): string {
        return this._dni;
    }
    public set dni(value: string) {
        this._dni = value;
    }

    public get cumpleaños(): Date {
        return this._cumpleaños;
    }
    public set cumpleaños(value: Date) {
        this._cumpleaños = value;
    }

    public get colorFavorito(): string {
        return this._colorFavorito;
    }
    public set colorFavorito(value: string) {
        this._colorFavorito = value;
    }

    public get sexo(): string {
        return this._sexo;
    }
    public set sexo(value: string) {
        this._sexo = value;
    }

    public get direcciones(): Dirección[] {
        return this._direcciones;
    }
    public set direcciones(value: Dirección[]) {
        this._direcciones = value;
    }

    public get mails(): Mail[] {
        return this._mails;
    }
    public set mails(value: Mail[]) {
        this._mails = value;
    }

    public get telefonos(): Teléfono[] {
        return this._telefonos;
    }
    public set telefonos(value: Teléfono[]) {
        this._telefonos = value;
    }

    public get notas(): any {
        return this._notas;
    }
    public set notas(value: any) {
        this._notas = value;
    }
}


