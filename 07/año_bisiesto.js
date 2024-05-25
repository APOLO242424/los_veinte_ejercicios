function esBisiesto(ano) {

    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return true;
    }
     else {
        return false;
    }
}

// Ejemplos de uso

let ano1 = 2024;
let ano2 = 1900;
let ano3 = 2000;

console.log(`¿El año ${ano1} es bisiesto? ${esBisiesto(ano1)}`); 
// Debería imprimir: ¿El año 2024 es bisiesto? true

console.log(`¿El año ${ano2} es bisiesto? ${esBisiesto(ano2)}`); 
// Debería imprimir: ¿El año 1900 es bisiesto? false

console.log(`¿El año ${ano3} es bisiesto? ${esBisiesto(ano3)}`); 
