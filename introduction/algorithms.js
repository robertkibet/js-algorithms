// simple account topup withdraw balance algorithm
let balance = 0;

const deposit = (amount) => {
  // if amount is a number and is greater than 0
  if (typeof amount === "number" && amount > 0) {
    balance += amount;
    return;
  }
  // if amount is not a number or is less than 0
  if (typeof amount !== "number" || amount < 0) {
    console.log("Invalid amount, amount should be greater than 0");
    return;
  }
  console.log("Invalid input");
};
const withdraw = (amount) => {
  // if there is enough balance
  if (amount <= balance) {
    balance -= amount;
    return;
  }
  // if there is not enough balance
  if (amount > balance) {
    console.log("Insufficient funds");
    return;
  }
};
const showBalance = () => {
  console.log(`Balance: ${balance}`);
};

// deposit(500);
// withdraw(700);
// console.log(showBalance());

let numbers = [10, 10, 10, 10];

// algorithm to calculate sum of array
const sum = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

console.log(sum(numbers));
