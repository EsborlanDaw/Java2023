"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = require("./persona");
const direccion_1 = require("./direccion");
const mail_1 = require("./mail");
const telefono_1 = require("./telefono");
const direccion1 = new direccion_1.Dirección("plaza mayor", 8, 2, "C", 25635, "Madrid", "Madrid");
const mail1 = new mail_1.Mail(mail_1.TipoMail.Personal, "persona1@gmail.com");
const telefono1 = new telefono_1.Teléfono(telefono_1.TipoTeléfono.Personal, 698456214);
const direccion2 = new direccion_1.Dirección("falsa", 1, 1, "C", 24758, "Zaragoza", "Zaragoza");
const mail2 = new mail_1.Mail(mail_1.TipoMail.Trabajo, "persona2@gmail.com");
const telefono2 = new telefono_1.Teléfono(telefono_1.TipoTeléfono.Trabajo, 698456214);
const direccion3 = new direccion_1.Dirección("pegaso", 15, 4, "A", 34458, "Valencia", "Valencia");
const mail3 = new mail_1.Mail(mail_1.TipoMail.Otros, "persona3@gmail.com");
const telefono3 = new telefono_1.Teléfono(telefono_1.TipoTeléfono.Trabajo, 632547812);
const persona1 = new persona_1.Persona("Natalia", "Mateo Menéndez", 29, "53812351X", new Date(1991, 10, 5), "Azul", "Mujer", [direccion1], [mail1], [telefono1], "");
const persona2 = new persona_1.Persona("Mari Carmen", "López Campos", 50, "456987254T", new Date(1970, 6, 15), "Rosa", "Mujer", [direccion2], [mail2], [telefono2], "");
const persona3 = new persona_1.Persona("Borja", "Rodríguez Rodríguez", 20, "365478125L", new Date(2000, 9, 16), "Azul", "Varón", [direccion3], [mail3], [telefono3], "");
function mostrarPersona(p) {
    console.log('Persona:', p.nombre, p.apellidos, p.edad, p.dni, p.cumpleaños, p.colorFavorito, p.sexo, p.notas);
    for (const d of p.direcciones) {
        mostrarDireccion(d);
    }
    for (const m of p.mails) {
        mostrarMail(m);
    }
    for (const t of p.telefonos) {
        mostrarTelefono(t);
    }
    console.log('---');
}
function mostrarDireccion(d) {
    console.log("Dirección:", d.calle, d.numero, d.piso, d.letra, d.codigoPostal, d.poblacion, d.provincia);
}
function mostrarMail(m) {
    console.log("Mail:", m.tipo, m.direccion);
}
function mostrarTelefono(t) {
    console.log("Teléfono:", t.tipo, t.numero);
}
function main() {
    const agenda = {
        "53812351X": persona1,
        "456987254T": persona2,
        "365478125L": persona3,
    };
    const personas = Object.values(agenda);
    console.log(personas);
    // 1
    for (const p of personas) {
        mostrarPersona(p);
    }
    // 2
    const dni = "456987254T";
    const person = agenda[dni];
    person.añadirDireccion(new direccion_1.Dirección("López Hoyos", 5, 1, "B", 28047, "Madrid", "Madrid"));
    person.añadirMail(new mail_1.Mail(mail_1.TipoMail.Casa, "casa1@gmail.com"));
    person.añadirTelefono(new telefono_1.Teléfono(telefono_1.TipoTeléfono.Otros, 647895123));
    // 3
    for (const p of personas) {
        mostrarPersona(p);
    }
}
main();
