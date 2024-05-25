var cantidad, precio, descuento, compra, pagar;

precio = parseFloat(prompt("ingresar precio"));
cantidad = parseFloat(prompt("Ingresa cantidad"));

compra = precio * cantidad ;
descuento = compra * 5;
pagar = compra - descuento;

console.log("El descuento es : " + descuento);
console.log("El total a pagar es: " + pagar);