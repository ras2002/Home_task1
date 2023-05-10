const args = process.argv.slice(2);

const operation = args[0];
const values = args.slice(1);

if (operation === "--operation") {
  const operator = values[0];
  const nums = values.slice(1).map(Number);

  switch (operator) {
    case "addition":
      if (nums.length === 0) {
        console.log("No numbers provided for addition");
      } else {
        const result = nums.reduce((acc, val) => acc + val);
        console.log(`${nums.join(" + ")} = ${result}`);
      }
      break;
    case "subtraction":
      if (nums.length !== 2) {
        console.log("Subtraction requires exactly 2 numbers");
      } else {
        const result = nums[0] - nums[1];
        console.log(`${nums[0]} - ${nums[1]} = ${result}`);
      }
      break;
    case "multiplication":
      if (nums.length === 0) {
        console.log("No numbers provided for multiplication");
      } else {
        const result = nums.reduce((acc, val) => acc * val);
        console.log(`${nums.join(" * ")} = ${result}`);
      }
      break;
    case "division":
      if (nums.length !== 2) {
        console.log("Division requires exactly 2 numbers");
      } else if (nums[1] === 0) {
        console.log("Cannot divide by zero");
      } else {
        const result = nums[0] / nums[1];
        console.log(`${nums[0]} / ${nums[1]} = ${result}`);
      }
      break;
    default:
      console.log(`Unsupported operation: ${operator}`);
      break;
  }
} else {
  console.log("Invalid input format");
}
