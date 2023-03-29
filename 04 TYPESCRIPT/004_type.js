(function () {
    var Antonio = {
        nombre: "Antonio",
        edad: 45,
        clienteVIP: true,
        getName: function () {
            return Antonio.nombre;
        }
    };
    console.log(Antonio);
    console.log("El nombre del cliente es " + Antonio.getName());
})();
