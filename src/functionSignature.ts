let calc: (num1: number, num2: number, operation: string) => number | string;

calc = (num1: number, num2: number, operation: string) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "invalid operation";
  }
};

console.log(calc(5, 3, "+-"));

let logStuff: (obj: { name: string; age: number }) => void;

logStuff = (obj: { name: string; age: number }) => {
  console.log(obj.age);
};
