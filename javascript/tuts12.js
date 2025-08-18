function addition(arrNum) {
  let sum = 0;
  for (let i = 0; i < arrNum.length; i++) {
    sum += arrNum[i];
  }
  return sum;
}
let total = addition([5, 5, 5, 5]);
console.log(total);

// Functions
