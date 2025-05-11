const Queue = require("./queue");

const queue = new Queue();

queue.enqueue("Task 1", 3);
queue.enqueue("Task 2", 2);
queue.enqueue("Task 3", 1);
queue.enqueue("Task 4", 4);
queue.enqueue("Task 5", 5);

console.log(queue.getInfo());

queue.dequeue("oldest");
console.log("Dequed oldest!\n");
console.log(queue.getInfo());

queue.dequeue("newest");
console.log("Dequed newest!\n");
console.log(queue.getInfo());

queue.dequeue("highest");
console.log("Dequed highest!\n");
console.log(queue.getInfo());

queue.dequeue("lowest");
console.log("Dequed lowest!\n");
console.log(queue.getInfo());
