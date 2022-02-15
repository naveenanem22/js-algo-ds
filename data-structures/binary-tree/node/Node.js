import _ from "lodash";

class Node {
  constructor(data, leftChild, rightChild) {
    this.data = data;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }

  hasLeftChild() {
    return !_.isEmpty(this.leftChild);
  }
  hasRightChild() {
    return !_.isEmpty(this.rightChild);
  }
  isLeafNode() {
    return !this.hasLeftChild() || !this.hasRightChild();
  }
}

export default Node;
