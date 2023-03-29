"use strict";
exports.__esModule = true;
exports.Mail = exports.TipoMail = void 0;
var TipoMail;
(function (TipoMail) {
    TipoMail["Personal"] = "Personal";
    TipoMail["Casa"] = "Casa";
    TipoMail["Trabajo"] = "Trabajo";
    TipoMail["Otros"] = "Otros";
})(TipoMail = exports.TipoMail || (exports.TipoMail = {}));
var Mail = /** @class */ (function () {
    function Mail(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    Object.defineProperty(Mail.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "direccion", {
        get: function () {
            return this._direccion;
        },
        set: function (value) {
            this._direccion = value;
        },
        enumerable: false,
        configurable: true
    });
    return Mail;
}());
exports.Mail = Mail;
