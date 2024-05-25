//Solicitar al usuario que ingrese el año

let year = parseInt(prompt("Ingresa un año:"));

// Verificar si el año es bisiesto

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " es un año bisiesto.");

} 
else {
    console.log(year + " no es un año bisiesto.");
}