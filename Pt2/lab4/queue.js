const { getElementByPriority } = require("./utils");

class Queue {
  constructor() {
    this.buffer = [];
    this.highest = null;
    this.lowest = null;
  }

  getBuffer() {
    return this.buffer;
  }

  getInfo() {
    const info = `Buffer:\n${JSON.stringify(this.buffer)}\n
Oldest: ${JSON.stringify(this.peek("oldest"))}\n
Newest: ${JSON.stringify(this.peek("newest"))}\n
Highest: ${JSON.stringify(this.peek("highest"))}\n
Lowest: ${JSON.stringify(this.peek("lowest"))}\n`;
    return info;
  }

  enqueue(item, priority) {
    const element = {
      value: item,
      priority: priority,
    };

    if (this.highest === null && this.lowest === null) {
      this.highest = element;
      this.lowest = element;
    } else {
      if (this.highest.priority < priority) this.highest = element;

      if (this.lowest.priority > priority) this.lowest = element;
    }

    this.buffer.push(element);
  }

  dequeue(mode) {
    if (this.buffer.length === 0) return null;

    if (mode === "oldest") this.buffer.shift();

    if (mode === "newest") this.buffer.pop();

    if (mode === "highest" || mode === "lowest") {
      const element = mode === "highest" ? this.highest : this.lowest;
      this.buffer = this.buffer.filter((el) => el !== element);
    }
  }

  peek(mode) {
    if (this.buffer.length === 0) return null;

    if (mode === "oldest") return this.buffer[0];

    if (mode === "newest") return this.buffer[this.buffer.length - 1];

    if (mode === "highest" || mode === "lowest") {
      return getElementByPriority(this.buffer, mode);
    }
  }
}

module.exports = Queue;
