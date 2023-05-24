function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  let name = 'Akademia108';
  let reversedName = reverseString(name);
  
  console.log(reversedName);
  