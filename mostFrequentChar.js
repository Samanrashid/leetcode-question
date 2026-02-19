// JavaScript program to find the longest common prefix
// using Sorting

function longestCommonPrefix(arr) {
  // Sort the array of strings
  arr.sort();

  // Get the first and last strings after sorting
  let first = arr[0]; //geeksforgeeks
  let last = arr[arr.length - 1]; //geezer
  let minLength = Math.min(first.length, last.length); //

  let i = 0;

  // Find the common prefix between the first and
  // last strings
  while (i < minLength && first[i] === last[i]) {
    i++;
  }

  // Return the common prefix
  return first.substring(0, i);
}

// Driver Code
let arr = ["geeksforgeeks", "geeks", "geek", "geezer"];
console.log(longestCommonPrefix(arr));

function Method2(strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);

      if (prefix === "") return "";
    }
  }
  return prefix;
}

console.log(Method2(["flower", "flow", "flight"])); // fl
console.log(Method2(["dog", "racecar", "car"])); // ""
