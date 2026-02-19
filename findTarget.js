function findTarget(arr, target) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        res.push([i, j]);
      }
    }
  }
  return res;
}
console.log(findTarget([2, 7, 3, 6], 9));
function findTargetMethod2(arr, target) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[arr[i]] = i;
  }
}
console.log(findTargetMethod2([2, 7, 3, 6], 9));
