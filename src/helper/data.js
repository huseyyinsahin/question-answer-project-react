const questions = [
  {
    id: 1,
    question: "What are the keywords used to declare variables in JavaScript?",
    answer:
      "In JavaScript, variables can be declared using the `var`, `let`, and `const` keywords. `var` has function scope, while `let` and `const` have block scope. Variables declared with `const` cannot be reassigned.",
  },
  {
    id: 2,
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables. A closure remembers the environment in which it was created.",
  },
  {
    id: 3,
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before code execution. This means variables and functions can be used before they are declared.",
  },
  {
    id: 4,
    question: "What is an arrow function in JavaScript?",
    answer:
      "An arrow function is a shorthand syntax for writing anonymous functions in JavaScript. Arrow functions do not have their own `this` context and inherit it from the surrounding context. For example, `const add = (a, b) => a + b;` is an arrow function.",
  },
  {
    id: 5,
    question: "What is asynchronous programming in JavaScript?",
    answer:
      "Asynchronous programming allows code to run without blocking the execution of other operations. In JavaScript, asynchronous operations are often handled using `setTimeout`, `Promises`, and `async/await`.",
  },
  {
    id: 6,
    question: "What is the `this` keyword in JavaScript?",
    answer:
      "The `this` keyword refers to the context in which a function is executed. It can refer to different values depending on how the function is called. For example, in an object method, `this` refers to the object itself.",
  },
  {
    id: 7,
    question: "How do you sort an array in JavaScript?",
    answer:
      "You can sort an array in JavaScript using the `array.sort()` method. This method sorts the elements of an array alphabetically or numerically. For numerical sorting, you should use a comparison function (`compareFunction`).",
  },
];
export default questions;
