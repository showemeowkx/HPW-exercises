import chalk from "chalk";
import { LogData } from "./log-data.interface";

export const log = (level: string = "INFO") => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    const startTime = Date.now();

    descriptor.value = (...args: any[]) => {
      const logData: LogData = {
        level,
        propertyKey,
        args,
        startTime,
      };

      try {
        const result = originalMethod.apply(this, args);
        if (result instanceof Promise) {
          return result
            .then((res: any) => {
              logOrThrow(logData, res);
              return res;
            })
            .catch((error: any) => {
              logOrThrow(logData, error.message, true);
            });
        }
        return logOrThrow(logData, result);
      } catch (error) {
        return logOrThrow(logData, error.message, true);
      }
    };
  };
};

const logOrThrow = (options: LogData, output: any, isError = false) => {
  const { level, startTime } = options;

  const duration = Date.now() - startTime;
  const logText = formLogText(options, output, duration);

  if (level !== "ERROR") {
    if (isError) {
      throw new Error(output);
    }
    console.log(logText);
    return output;
  } else {
    if (!isError) {
      return output;
    }
    console.log(logText);
  }
};

const formLogText = (
  logData: LogData,
  output: any,
  timeStamp: number = null
) => {
  const { level, propertyKey, args } = logData;
  let logText: string = `[${level}] Function: ${propertyKey}, Arguments: ${JSON.stringify(
    args
  )}`;
  let timeStampText: string = timeStamp
    ? `, Operated in (ms): ${timeStamp}`
    : "";

  if (level === "ERROR") {
    logText += `, Error: ${output}` + timeStampText;
    return chalk.red(logText);
  } else {
    const color = level === "INFO" ? chalk.blue : chalk.green;
    logText += `, Result: ${JSON.stringify(output)}` + timeStampText;
    return color(logText);
  }
};
