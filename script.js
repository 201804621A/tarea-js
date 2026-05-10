// ===== EJERCICIO 5 =====
let base = 10;
let altura = 5;
let area = base * altura;
document.getElementById("resultadoa").innerHTML =
    "Base: " + base + "<br>" +
    "Altura: " + altura + "<br>" +
    "Área del rectángulo: " + area;

// ===== EJERCICIO 6 =====

let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
document.getElementById("resultadoc").innerHTML =
    "Temperatura en Celsius: 25 °C <br>" +
    "Temperatura en Fahrenheit: " + fahrenheit + " °F";

    // ===== EJERCICIO 7 =====

let precioOriginal = 100;
let descuento = 20;
let montoDescuento = (precioOriginal * descuento) / 100;
let precioFinal = precioOriginal - montoDescuento;
document.getElementById("resultadod").innerHTML =
    "Precio original: S/ " + precioOriginal + "<br>" +
    "Descuento: " + descuento + "%<br>" +
    "Precio final: S/ " + precioFinal;

    // ===== EJERCICIO 8 =====

let numeroTabla = 7;
let tabla = "";
for(let i = 1; i <= 10; i++){
    tabla += numeroTabla + " x " + i + " = " + (numeroTabla * i) + "<br>";
}
document.getElementById("resultadot").innerHTML = tabla;

// ===== EJERCICIO 9 =====

let numeros = [4, 7, 10, 13, 16, 21];
let cantidadPares = 0;

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 == 0){
        cantidadPares++;
    }
}
document.getElementById("resultadopa").innerHTML =
    "Lista de números: " + numeros.join(", ") + "<br>" +
    "Cantidad de números pares: " + cantidadPares;

    // ===== EJERCICIO 10 =====

let promedioEstudiante = 17;
let nivel = "";
if(promedioEstudiante < 11){
    nivel = "Bajo";
}
else if(promedioEstudiante >= 11 && promedioEstudiante <= 13){
    nivel = "Regular";
}
else if(promedioEstudiante >= 14 && promedioEstudiante <= 16){
    nivel = "Bueno";
}
else{
    nivel = "Excelente";
}
document.getElementById("resultadopr").innerHTML =
    "Promedio del estudiante: " + promedioEstudiante + "<br>" +
    "Nivel de rendimiento: " + nivel;