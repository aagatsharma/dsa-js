const arrs = [5, 2, 8, 4, 1, 0, 3, 6, 7];

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, s, e) {
  let pivot = arr[e];
  let i = s - 1;

  for (let j = s; j <= e - 1; j++) {
    if (pivot > arr[j]) {
      i++;
      swap(arr, i, j);
    }
  }
  i++;
  swap(arr, i, e);
  return i;
}

function quickSort(arr, s, e) {
  if (s < e) {
    let pi = partition(arr, s, e);
    quickSort(arr, s, pi - 1);
    quickSort(arr, pi + 1, e);
  }
  return arr;
}

console.log(quickSort(arrs, 0, arrs.length - 1));
