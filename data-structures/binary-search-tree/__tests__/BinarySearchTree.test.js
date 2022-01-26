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
