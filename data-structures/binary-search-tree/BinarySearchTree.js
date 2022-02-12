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

  postOrderTraverseAndUpdate(node, traversedElements) {
    if (this.hasLeftNode(node)) {
      this.postOrderTraverseAndUpdate(node.leftNode, traversedElements);
    }

    if (this.hasRightNode(node)) {
      this.postOrderTraverseAndUpdate(node.rightNode, traversedElements);
    }
    traversedElements.push(node.data);
  }

  postOrderTraverse() {
    const traversedElements = [];

    if (_.isEmpty(this.root)) {
      return [];
    } else {
      this.postOrderTraverseAndUpdate(this.root, traversedElements);
    }

    return traversedElements;
  }

  levelOrderTraverseAndUpdate(traversedElements) {
    let currentNodeIndex = 0;
    while (currentNodeIndex < traversedElements.length) {
      if (this.hasLeftNode(traversedElements[currentNodeIndex])) {
        traversedElements.push(traversedElements[currentNodeIndex].leftNode);
      }
      if (this.hasRightNode(traversedElements[currentNodeIndex])) {
        traversedElements.push(traversedElements[currentNodeIndex].rightNode);
      }
      currentNodeIndex++;
    }
  }

  levelOrderTraverse() {
    const traversedElements = [];
    if (_.isEmpty(this.root)) {
      return [];
    } else {
      traversedElements.push(this.root);
      this.levelOrderTraverseAndUpdate(traversedElements);

      return traversedElements.map((item) => item.data);
    }
  }

  getLevelOrderTraversedNodes() {
    const traversedElements = [];
    if (_.isEmpty(this.root)) {
      return [];
    } else {
      traversedElements.push(this.root);
      this.levelOrderTraverseAndUpdate(traversedElements);

      return traversedElements;
    }
  }

  isFullBinaryTree() {
    var result = false;
    var traversedElements = this.getLevelOrderTraversedNodes();

    for (var node of traversedElements) {
      result =
        (this.hasLeftNode(node) && this.hasRightNode(node)) ||
        (!this.hasLeftNode(node) && !this.hasRightNode(node));

      if (!result) {
        break;
      }
    }

    return result;
  }

  isCompleteBinaryTree() {
    var result = false;
    var traversedElements = this.getLevelOrderTraversedNodes();

    for (var node of traversedElements) {
      result =
        (this.hasLeftNode(node) && this.hasRightNode(node)) ||
        (!this.hasLeftNode(node) && !this.hasRightNode(node)) ||
        (this.hasLeftNode(node) && !this.hasRightNode(node));

      if (!result) {
        break;
      }
    }

    return result;
  }
}

export default BinarySearchTree;
