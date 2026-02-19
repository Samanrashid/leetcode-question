function findDuplicate(arr) {
  let freq = {};
  for (let value of arr) {
    freq[value] = (freq[value] || 0) + 1;
  }
  for (let value of arr) {
    if (freq[value] > 1) {
      return value;
    }
  }
}
console.log(findDuplicate([3, 1, 3, 4, 2]));
