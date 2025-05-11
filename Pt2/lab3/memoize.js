const argKey = (arg) => `${arg.toString()}:${typeof arg}`;

const genKey = (args) => args.map(argKey).join("/");

const memoize = (fn, policy) => {
  return (...args) => {
    const key = genKey(args);
    if (policy.has(key)) return policy.get(key);
    const result = fn(...args);
    policy.put(key, result);
    return result;
  };
};

module.exports = memoize;
