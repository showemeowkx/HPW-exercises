import { log } from "./log.decorator";

export class Calculator {
  @log("INFO")
  add(a: number, b: number): number {
    return a + b;
  }

  @log("DEV")
  multiply(a: number, b: number): number {
    return a * b;
  }

  @log("ERROR")
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }

  @log("INFO")
  getSumOfArray(arr: number[]): number {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }

  @log("ERROR")
  calculateWithDelay(problem: string, delay: number = 1000): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(eval(problem));
        } catch (error) {
          reject(error);
        }
      }, delay);
    });
  }
}
