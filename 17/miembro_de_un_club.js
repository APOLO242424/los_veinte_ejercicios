
var precioOriginal = 100;

var descuentoClub = 10; 

var esMiembroClub = true; 


if (esMiembroClub) {
    
    var precioConDescuento = precioOriginal - (precioOriginal * (descuentoClub / 100));
    console.log("El precio con descuento para el cliente miembro del club es: $" + precioConDescuento);

} else {

    console.log("El precio sin descuento para el cliente no miembro del club es: $" + precioOriginal);
}