import _ from "lodash";
class Queue {
  constructor() {
    this.queue = [];
    this.qStart = -1;
    this.qEnd = -1;
  }

  isQueueEmpty() {
    return (
      _.isEmpty(this.queue) || (this.qEnd === this.qStart && this.qEnd === -1)
    );
  }
  hasSingleElement() {
    return this.qStart === this.qEnd && this.qEnd !== -1;
  }

  enqueue(node) {
    this.queue.push(node);
    if (_.isEmpty(this.queue)) {
      this.qStart++;
      this.qEnd++;
    } else {
      this.qEnd++;
    }
  }

  dequeue() {
    if (!this.isQueueEmpty) {
      if (this.hasSingleElement()) {
        this.qEnd = -1;
        this.qStart = -1;
      } else {
        this.qEnd--;
      }
    }
  }
}

export default Queue;
