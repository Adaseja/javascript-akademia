function calculateSumOfSquares(array) {
    let sumOfSquares = 0;
  
    array.forEach(function (element) {
      sumOfSquares += Math.pow(element, 2);
    });
  
    return sumOfSquares;
  }
  

  let numbers = [0, 1, 2, 3, 4, 5];
  let result = calculateSumOfSquares(numbers);
  console.log('Suma kwadratów: ' + result);
  