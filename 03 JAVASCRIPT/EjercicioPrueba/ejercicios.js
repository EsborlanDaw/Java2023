// Se crea un botón que, al ser clicado, llame a una función, 
// muestre una ventana de alerta con un mensaje y además lo muestre por
// la consola del navegador.



function alertShow() {
    let msg = "Has clicado el botón de alerta"
    console.log(msg)
    alert(msg)

}
// Se crea un elemento con texto en su interior y un botón con la capacidad
// de llamar a una función,se debe mostrar el contenido (si el texto está oculto)
// y ocultar el contenido (si el texto se está mostrando) de este elemento.

function showHidden() {
    if (!document.getElementById('texto').hidden) {
        document.getElementById('texto').hidden = true
    } else {
        document.getElementById('texto').hidden = false
    }

}
// Se crean dos elementos de entrada y un botón. El usuario introducirá un
// número en cadacampo de entrada y, al hacer clic en el botón, una función
// de JavaScript sumará estos dos valores y mostrará el resultado por pantalla.
function sumar() {
    let number1 = parseInt(document.getElementById('number1').value)
    let number2 = parseInt(document.getElementById('number2').value)
    let suma = number1 + number2
    alert("La suma total es: " + suma)
}
// Crea un script en Javascript que contenga un botón que cambia de color y
// tamaño de un texto,dependiendo de si el ratón está encima de éste o no, t
// utilizando funciones. 

function changeText(encima) {
    if (encima) {
        document.getElementById('cambiarTexto').style.fontSize = '100px'
        document.getElementById('cambiarTexto').style.color = 'green'
    }
    else {
        document.getElementById('cambiarTexto').style.fontSize = '20px'
        document.getElementById('cambiarTexto').style.color = 'black'
    }
}

//Probamos el throw new 

function showError(errores) {

    let errorhay = "Se ha generado un error"

    if (errores) {
        throw new Error(errorhay)
    }
    else {

        alert("No hay error")
    }

}

// Vamos a crear tres botones:
//     1. uno para cambiar el color de fondo de nuestra página
//     2. otro que nos genere un número aleatorio
//     3. otro que ponga el borde de nuestro nombre en rojo

function changeBackgroundColor(status) {
    if (status) {
        document.querySelector('body').style.backgroundColor = 'black'
    }
    else {
        document.querySelector('body').style.backgroundColor = 'white'
    }
}

function getOneRandom() {
    let x = parseInt(Math.random() * 100);
    document.getElementById('numberRandom').innerHTML = x
}

function changeBorderColor() {

    document.getElementById('nombre').style.border = 'thick solid green'

}

// Crear script que calcule la media de los valores de un array.
let sumaArray = []

function rellenarArray() {

    let numero = document.getElementById('number').value
    sumaArray = sumaArray.push(numero);
    console.log(sumaArray)
    document.getElementById('tNumeros').innerHTML = sumaArray;
}

function calcularMedia() {

    let suma = 0

    for (let i = 0; i < sumaArray.length; i++) {

        suma = parseInt(suma) + parseInt(sumaArray[i])
    }

    suma = suma / sumaArray.length;

    document.getElementById('total').innerHTML = suma;

}

function vaciarArray() {

    sumaArray = []

    document.getElementById('tNumeros').innerHTML = sumaArray;
    document.getElementById('total').innerHTML = null;
}

//Calcular el palíndromo de un string introducido por prompt

function comprobarPalindromo() {
    let texto = document.getElementById('textPalindromo').value;
    let x = texto.length;
    let textoReverse = ""

    while (x >= 0) {
        textoReverse = textoReverse + texto.charAt(x);
        x--;
    }


    if (texto == textoReverse) {
        document.getElementById('comprobacion').innerHTML = "Es un palindromo: " + texto + " / " + textoReverse;
    } else {
        document.getElementById('comprobacion').innerHTML = "No es un palindromo: " + texto + " / " + textoReverse;
    }
}

//Calcular estación del año en función de una dia y mes introducido por prompt

function comprobarEstacion() {


    let fecha = new Date(document.getElementById('dateEstacion').value)
    console.log(fecha)

    let dia = fecha.getUTCDate();
    let mes = fecha.getUTCMonth() + 1;

}

//Realizar un script que sea capaz de resolver una ecuación de segundo grado introducida
//por prompt una ecuación de segundo grado

function calcularEcuacion() {
    let a = document.getElementById('numeroA').value;
    let b = document.getElementById('numeroB').value;
    let c = document.getElementById('numeroC').value;


    
    let x1 = (- b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    let x2 = (- b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

    console.log("x2" + x2)
    
    document.getElementById('x1').innerHTML = x1;
    document.getElementById('x2').innerHTML = x2;
}

// Comprobar si un mail introducido por prompt contiene la letra @

function comprobarArroba(){

    let email = document.getElementById('emailTest').value

    console.log(email.includes('@'))
}

// Contar las palabras y las letras de un texto dado.

function contarTotal (){

    let texto = document.getElementById('textoCuenta').value
    let nuevoTexto = texto.replace(" ", "")
    let totalPalabras = 1

    totalPalabras = texto.split(" ")
   
    document.getElementById('palabras').innerHTML = totalPalabras.length; 
    document.getElementById('letras').innerHTML = nuevoTexto.length;
}