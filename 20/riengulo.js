
function tipoTriangulo(lado1, lado2, lado3) {
    
    if (lado1 === lado2 && lado1 === lado3) {
      return "Equilátero";
    }
    
    else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      return "Isósceles";
    }


    else {
      return "Escaleno";
    }
  }
  
  console.log(tipoTriangulo(3, 3, 3));
  console.log(tipoTriangulo(3, 3, 2)); 
  console.log(tipoTriangulo(3, 4, 5)); 
  