function moveZero(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }
  while (count < arr.length) {
    arr[count] = 0;
    count++;
  }
  return arr;
}
console.log(moveZero([1, 2, 3, 0, 0, 8, 9]));
