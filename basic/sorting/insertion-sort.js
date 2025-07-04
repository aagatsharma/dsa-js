const arr = [5, 2, 8, 4, 1, 0, 3, 6, 7];

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let j = i - 1;
    while (j >= 0 && array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
      j--;
    }
  }
  return array;
}

console.log(insertionSort(arr));
