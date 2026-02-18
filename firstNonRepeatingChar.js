function toFindFirstCharacter(str) {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }
  return -1;
}
console.log(toFindFirstCharacter("hello javascript"));
console.log(toFindFirstCharacter("aabcbcdeff"));
