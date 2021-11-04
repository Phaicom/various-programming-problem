/**
 * origin post https://dev.to/0shuvo0/can-you-solve-this-interview-problem-4gaa
 */

const origin = "https://dev.to/0shuvo0";
const input = `[ "6Ly9kZXYudG", "9jb21tZW5", "8vMHNodXZvMC", "aHR0cHM", "0LzFqZTFt" ]`;

const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };
  permute(inputArr);

  return result;
};

const regex = /^[a-zA-Z:/.0-9]+$/g;
const result = permutator(JSON.parse(input))
  .filter((arr) => {
    try {
      const decode = atob(arr.join(""));
      if (regex.test(decode)) {
        return true;
      }
    } catch (error) {}
  })
  .map((i) => atob(i.join('')));

console.log(result.length === 1 ? result[0] : "");
