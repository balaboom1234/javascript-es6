let height = undefined;
let result = checkHeight(height);

function checkHeight(h) {
    return h ?? "Height is not defined";
  }

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
