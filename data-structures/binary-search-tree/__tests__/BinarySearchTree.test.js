import { test, expect } from "@jest/globals";
import BinarySearchTree from "../BinarySearchTree";

test("BinarySearchTree display test", () => {
  const binarySearchTree = new BinarySearchTree();
  binarySearchTree.insertNode(10);
  binarySearchTree.insertNode(20);
  binarySearchTree.insertNode(5);
  binarySearchTree.insertNode(25);
  binarySearchTree.insertNode(15);
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
