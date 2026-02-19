function reverseWord(str) {
  return str.trim().split(/\s+/).reverse().join(" ");
}
console.log(reverseWord("  hello   world  "));
