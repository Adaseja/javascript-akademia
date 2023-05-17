function sortString(string) {
    let sortedString = string.split('').sort().join('');
    return sortedString;
  }
  
  let name = 'Akademia108';
  let sortedName = sortString(name);
  
  console.log(sortedName);
  