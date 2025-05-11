const getElementByPriority = (buffer, mode) => {
  return buffer.reduce((result, current) => {
    if (mode === "highest") {
      return current.priority > result.priority ? current : result;
    } else {
      return current.priority < result.priority ? current : result;
    }
  }, buffer[0]);
};

module.exports = { getElementByPriority };
