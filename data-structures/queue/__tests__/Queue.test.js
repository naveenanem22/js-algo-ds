import Queue from "../Queue";

describe("Queue tests", () => {
  it("Queue displays correctly.", () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);
    console.log(queue.queue);
  });
});
