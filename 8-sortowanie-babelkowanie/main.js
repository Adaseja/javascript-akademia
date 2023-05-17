/* function sortNum (a, b) {
    return a - b;
  } */

const arr = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
/*   arr.sort(sortNum); */

/*   console.log(arr); */


const bubbleSort = (myTable) => {

  for (let i = 0; i < myTable.length; i++) {
    for (let y = 0; y < myTable.length; y++) {
      if (myTable[y] > myTable[y + 1]) {

        let temp = myTable[y + 1];
        myTable[y + 1] = myTable[y];
        myTable[y] = temp;



      }

    }

  }
  return myTable
}


console.log(bubbleSort(arr));
