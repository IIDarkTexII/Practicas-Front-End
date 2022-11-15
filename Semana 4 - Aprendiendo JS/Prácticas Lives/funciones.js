const cuadrado = function(x) {
    return x * x;
}
let numero = 4;
let numero2 = 2;
let sumanumerocuadrados= cuadrado(numero) + cuadrado(numero2);
console.log(sumanumerocuadrados);

///////////////////////////////////////////////
const ruido = function () {
    console.log("kataplum!");
}

ruido();

//////////////////////////////////////////////////
const exponencial = function (base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++){
        resultado *= base;
    }
    return resultado;
}
let resultado= exponencial(4,3);
console.log(resultado);

/////////////////////////////////////////////

console.log(sumar(5,65));
function sumar(x, y) {
    return x + y;
}

//////////////////////////////////////////////////////

const restar = (a, b) => {
    return a - b;
}
console.log(restar(40, 8));

/////////////////////////////////////////////////
function saludar(quien) {
  console.log("Hola " + quien);
}
saludar("Alejandro");

/////////////////////////////////////////////////////////////
//Excepciones
function preguntaDireccion(pregunta) {
  let result = prompt(pregunta);
  if (result.toLowerCase() == "izquierda") return "I";
  if (result.toLowerCase() == "derecha") return "D";
  throw new Error("Dirección inválida: " + result);
}

function mirar() {
  if (preguntaDireccion("A que lado? (Derecha o izquierda)") == "I") {
    return "una casa";
  } else {
    return "2 osos hambrientos";
  }
}

try {
  console.log("Mira!", mirar());
} catch (error) {
  console.log("Hubo un error: " + error);
}


///////////////////////////////////////////////////////