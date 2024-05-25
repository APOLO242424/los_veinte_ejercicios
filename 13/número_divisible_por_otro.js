
function esDivisible(numero, divisor) {
    

    if (divisor === 0) {
      return false;
    }
  
  
    return numero % divisor === 0;
  }
  
  
  console.log(esDivisible(10, 2)); 
  console.log(esDivisible(10, 3));
  console.log(esDivisible(15, 5));
  console.log(esDivisible(15, 0));
  