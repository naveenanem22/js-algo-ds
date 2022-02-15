import _ from "lodash";

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  calculateHeight(node) {
    if (node.isLeafNode()) {
      return 0;
    } else {
      var leftSubTreeHeight = 0;
      var rightSubTreeHeight = 0;
      if (node.hasLeftChild()) {
        leftSubTreeHeight = this.calculateHeight(node.leftChild);
      }
      if (node.hasRightChild()) {
        rightSubTreeHeight = this.calculateHeight(node.rightChild);
      }
      return Math.max(leftSubTreeHeight, rightSubTreeHeight) + 1;
    }
  }

  isBalancedBinaryTree(currentNode) {
    if (!_.isEmpty(currentNode)) {
      if (currentNode.isLeafNode()) {
        return true;
      } else {
        var leftSubTreeHeight =
          this.calculateHeight(currentNode.leftChild) || 0;
        var rightSubTreeHeight =
          this.calculateHeight(currentNode.rightChild) || 0;
        var heightDifference = Math.abs(leftSubTreeHeight - rightSubTreeHeight);
        return (
          heightDifference <= 1 &&
          this.isBalancedBinaryTree(currentNode.leftChild) &&
          this.isBalancedBinaryTree(currentNode.rightChild)
        );
      }
    }
  }
}
export default BinaryTree;
