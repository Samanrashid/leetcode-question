function toCheckPalindrome(str) {
  let cleanerStr = str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g);
  let reverse = cleanerStr.split(" ").reverse().join(" ");
  return cleanerStr === reverse;
}
console.log(toCheckPalindrome("A man, a plan, a canal: Panama"));
console.log(toCheckPalindrome("saw Was"));
