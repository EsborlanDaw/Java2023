"use strict";
exports.__esModule = true;
exports.Teléfono = exports.TipoTeléfono = void 0;
var TipoTeléfono;
(function (TipoTeléfono) {
    TipoTeléfono["Personal"] = "Personal";
    TipoTeléfono["Casa"] = "Casa";
    TipoTeléfono["Trabajo"] = "Trabajo";
    TipoTeléfono["Otros"] = "Otros";
})(TipoTeléfono = exports.TipoTeléfono || (exports.TipoTeléfono = {}));
var Teléfono = /** @class */ (function () {
    function Teléfono(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    Object.defineProperty(Teléfono.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teléfono.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (value) {
            this._numero = value;
        },
        enumerable: false,
        configurable: true
    });
    return Teléfono;
}());
exports.Teléfono = Teléfono;
