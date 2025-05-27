import { Calculator } from "./calculator";

const calculator = new Calculator();

const number = calculator.add(2, 3);

calculator.multiply(2, number);

calculator.divide(2, 0);

calculator.getSumOfArray([1, 2, 3, 4, 5]);

calculator.calculateWithDelay("20 + 30", 500);

calculator.calculateWithDelay("2 + hi lil bro", 2000);
