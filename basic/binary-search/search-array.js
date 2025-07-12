const arr = [1, 3, 5, 6, 8, 9, 10, 12, 14, 16, 18, 20];

function binarySearch(arr, target) {
  let s = 0;
  let e = arr.length - 1;

  while (e >= s) {
    let mid = Math.floor((s + e) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr, 10)); // Output: 6
console.log(binarySearch(arr, 1)); // Output: 0
console.log(binarySearch(arr, 20)); // Output: 11
