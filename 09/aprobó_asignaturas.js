
var asig , nota1=0 , nota2=0 , nota3=0;

for( var i = 0; i < 60; i++){

   asig = parseInt(prompt("ingresar : "));

if ( asig >= 3){

  nota1 += asig;

  nota3++;


  }else 

    nota2 += asig;

  }

console.log(" El promedio de notas aprobadas es : " ,(nota1/nota3).toFixed(2), "\nEl promedio de notas reprobadas :" , (nota1/(60-nota3)).toFixed(2) );