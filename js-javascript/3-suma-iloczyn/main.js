function calculateSumAndMultiplicaton(array) {
    let sum = 0;
    let multiplication = 1;
    

    array.forEach(function (element) {
        sum += element;
        multiplication *= element;
    });
    
  console.log('Suma: ' + sum);
  console.log('Iloczyn: ' + multiplication);
}

let numbers = [1, 2, 3, 4, 5, 6];
calculateSumAndMultiplicaton(numbers);