function binarySearchRange(low, high) {
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (isCorrect(mid) > 0) {
      high = mid - 1;
    } else if (isCorrect(mid) < 0) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function isCorrect(n) {
  if (n > 10) {
    return 1;
  } else if (n < 10) {
    return -1;
  } else {
    return 0;
  }
}

console.log(binarySearchRange(1, 100));
