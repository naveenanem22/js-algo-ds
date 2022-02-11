import _ from "lodash";
import BSTNode from "./bst-node/BSTNode";

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  hasLeftNode(node) {
    return !_.isEmpty(node.leftNode);
  }

  hasRightNode(node) {
    return !_.isEmpty(node.rightNode);
  }

  compareAndAttachTo(currentNode, targetNode) {
    if (currentNode.data > targetNode.data) {
      if (this.hasLeftNode(currentNode))
        this.compareAndAttachTo(currentNode.leftNode, targetNode);
      else {
        currentNode.leftNode = targetNode;
      }
    } else if (currentNode.data < targetNode.data) {
      if (this.hasRightNode(currentNode)) {
        this.compareAndAttachTo(currentNode.rightNode, targetNode);
      } else {
        currentNode.rightNode = targetNode;
      }
    }
  }

  insertNode(data) {
    const node = new BSTNode(data);
    let currentNode = this.root;
    if (_.isEmpty(currentNode)) {
      this.root = node;
    } else {
      this.compareAndAttachTo(currentNode, node);
    }
  }

  display() {
    console.log(this.root);
  }

  inOrderTraverseAndUpdate(node, traversedElements) {
    if (this.hasLeftNode(node)) {
      this.inOrderTraverseAndUpdate(node.leftNode, traversedElements);
    }
    traversedElements.push(node.data);
    if (this.hasRightNode(node)) {
      this.inOrderTraverseAndUpdate(node.rightNode, traversedElements);
    }
  }

  inOrderTraverse() {
    const traversedElements = [];

    if (_.isEmpty(this.root)) {
      return [];
    } else {
      this.inOrderTraverseAndUpdate(this.root, traversedElements);
    }

    return traversedElements;
  }

  preOrderTraverseAndUpdate(node, traversedElements) {
    traversedElements.push(node.data);
    
    if (this.hasLeftNode(node)) {
      this.preOrderTraverseAndUpdate(node.leftNode, traversedElements);
    }
    
    if (this.hasRightNode(node)) {
      this.preOrderTraverseAndUpdate(node.rightNode, traversedElements);
    }
  }

  preOrderTraverse() {
    const traversedElements = [];

    if (_.isEmpty(this.root)) {
      return [];
    } else {
      this.preOrderTraverseAndUpdate(this.root, traversedElements);
    }

    return traversedElements;
  }

  postOrderTraverse() {
    return [];
  }

  levelOrderTraverse() {
    if (_.isEmpty(this.root)) {
      return [];
    } else {
      let currentNode = this.root;
      const elementsArrary = [];

      if (this.hasLeftNode(currentNode)) {
        elementsArrary.push(currentNode.leftNode.data);
      } else if (this.hasRightNode(currentNode)) {
        elementsArrary.push(currentNode.rightNode.data);
      }

      return elementsArrary;
    }
  }
}

export default BinarySearchTree;
