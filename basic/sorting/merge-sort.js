const arr = [5, 2, 8, 4, 1, 0, 3, 6, 7];

function merge(array, s, m, e) {
  let left = array.slice(s, m + 1);
  let right = array.slice(m + 1, e + 1);

  let i = 0,
    j = 0,
    k = s;

  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      array[k] = right[j];
      j++;
    } else {
      array[k] = left[i];
      i++;
    }
    k++;
  }

  while (i < left.length) {
    array[k] = left[i];
    i++;
    k++;
  }

  while (j < right.length) {
    array[k] = right[j];
    j++;
    k++;
  }
}

function mergeSort(array, s, e) {
  if (s >= e) return;
  let m = Math.floor((s + e) / 2);
  mergeSort(array, s, m);
  mergeSort(array, m + 1, e);
  merge(array, s, m, e);
  return array;
}

console.log(mergeSort(arr, 0, arr.length - 1));
