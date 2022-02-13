import { test, expect } from "@jest/globals";
import BinarySearchTree from "../BinarySearchTree";

test("BinarySearchTree display test", () => {
  const binarySearchTree = new BinarySearchTree();
  binarySearchTree.insertNode(10);
  binarySearchTree.insertNode(20);
  binarySearchTree.insertNode(5);
  binarySearchTree.insertNode(25);
  binarySearchTree.insertNode(15);
  binarySearchTree.insertNode(3);
  binarySearchTree.insertNode(2);
  binarySearchTree.display();
});
test("BinarySearchTree in-order traversal test", () => {
  const binarySearchTree = new BinarySearchTree();
  binarySearchTree.insertNode(10);
  binarySearchTree.insertNode(20);
  binarySearchTree.insertNode(5);
  binarySearchTree.insertNode(25);
  binarySearchTree.insertNode(15);
  expect(binarySearchTree.inOrderTraverse()).toEqual([5, 10, 15, 20, 25]);
});
test("BinarySearchTree Pre-order traversal test", () => {
  const binarySearchTree = new BinarySearchTree();
  binarySearchTree.insertNode(10);
  binarySearchTree.insertNode(20);
  binarySearchTree.insertNode(5);
  binarySearchTree.insertNode(25);
  binarySearchTree.insertNode(15);
  expect(binarySearchTree.preOrderTraverse()).toEqual([10, 5, 20, 15, 25]);
});
test("BinarySearchTree Post-order traversal test", () => {
  const binarySearchTree = new BinarySearchTree();
  binarySearchTree.insertNode(10);
  binarySearchTree.insertNode(20);
  binarySearchTree.insertNode(5);
  binarySearchTree.insertNode(25);
  binarySearchTree.insertNode(15);
  expect(binarySearchTree.postOrderTraverse()).toEqual([5, 15, 25, 20, 10]);
});
test("BinarySearchTree Level-order traversal test", () => {
  const binarySearchTree = new BinarySearchTree();
  binarySearchTree.insertNode(10);
  binarySearchTree.insertNode(20);
  binarySearchTree.insertNode(5);
  binarySearchTree.insertNode(25);
  binarySearchTree.insertNode(15);
  expect(binarySearchTree.levelOrderTraverse()).toEqual([10, 5, 20, 15, 25]);
});
test("Binary Search Tree - Full binary tree test", () => {
  const binarySearchTree = new BinarySearchTree();
  binarySearchTree.insertNode(10);
  binarySearchTree.insertNode(20);
  binarySearchTree.insertNode(5);
  binarySearchTree.insertNode(25);
  binarySearchTree.insertNode(15);
  binarySearchTree.insertNode(3);
  binarySearchTree.insertNode(6);
  expect(binarySearchTree.isFullBinaryTree()).toEqual(true);
});
test("Binary Search Tree - Complete binary tree test", () => {
  const binarySearchTree = new BinarySearchTree();
  binarySearchTree.insertNode(10);
  binarySearchTree.insertNode(20);
  binarySearchTree.insertNode(5);
  binarySearchTree.insertNode(25);
  binarySearchTree.insertNode(15);
  binarySearchTree.insertNode(3);
  binarySearchTree.insertNode(6);
  expect(binarySearchTree.isFullBinaryTree()).toEqual(true);
  binarySearchTree.insertNode(30);
  expect(binarySearchTree.isFullBinaryTree()).toEqual(false);
});
test("Binary Search Tree - Full binary tree recursion test", () => {
  const binarySearchTree = new BinarySearchTree();
  binarySearchTree.insertNode(10);
  binarySearchTree.insertNode(20);
  binarySearchTree.insertNode(5);
  binarySearchTree.insertNode(25);
  binarySearchTree.insertNode(15);
  binarySearchTree.insertNode(3);
  binarySearchTree.insertNode(6);
  expect(
    binarySearchTree.isFullBinaryTreeRecursive(binarySearchTree.root)
  ).toEqual(true);
  binarySearchTree.insertNode(30);
  expect(
    binarySearchTree.isFullBinaryTreeRecursive(binarySearchTree.root)
  ).toEqual(false);
});
