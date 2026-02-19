function checkAnagram(str1, str2) {
  let s1 = str1.toLowerCase().replace(/\s/g, "").split("").sort().join("");
  let s2 = str2.toLowerCase().replace(/\s/g, "").split("").sort().join("");
  return s1 === s2;
}
console.log(checkAnagram("silent", "listen"));
console.log(checkAnagram("rat", "car"));
