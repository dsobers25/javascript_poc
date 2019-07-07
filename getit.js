function power(base, exponent = 2) {
    debugger;
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        debugger;
      result *= base;
      debugger;
    }
    debugger;
    return result;
  }
  
  console.log(power(4));
  // → 16
  console.log(power(2, 6));
  // → 64