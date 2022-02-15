import { test, expect } from "@jest/globals";
import BinaryTree from "../BinaryTree";
import Node from "../node/Node";

test("BinaryTree - Balanced binary tree given the tree is balanced - test", () => {
  const root = new Node(10);
  root.leftChild = new Node(20);
  root.rightChild = new Node(30);
  root.leftChild.leftChild = new Node(40);
  root.leftChild.rightChild = new Node(50);
  root.rightChild.leftChild = new Node(60);
  root.rightChild.rightChild = new Node(70);

  const binaryTree = new BinaryTree(root);
  expect(binaryTree.isBalancedBinaryTree(root)).toEqual(true);
});

test("BinaryTree - Balanced binary tree given the tree is not balanced - test", () => {
  const root = new Node(10);
  root.leftChild = new Node(20);
  root.rightChild = new Node(30);
  root.leftChild.leftChild = new Node(40);
  root.leftChild.rightChild = new Node(50);
  root.rightChild.leftChild = new Node(60);
  root.rightChild.rightChild = new Node(70);
  root.leftChild.leftChild.leftChild = new Node(80);
  root.leftChild.leftChild.leftChild.leftChild = new Node(90);

  const binaryTree = new BinaryTree(root);
  expect(binaryTree.isBalancedBinaryTree(root)).toEqual(false);
});
