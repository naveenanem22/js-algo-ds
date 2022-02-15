import { test, expect } from "@jest/globals";
import BinaryTree from '../BinaryTree';
import Node from '../node/Node';

test("BinaryTree - Balanced binary tree - test", () => {
    const root = new Node(10);
    root.leftChild = new Node(20);
    root.rightChild = new Node(30);
    root.leftChild.leftChild = new Node(40);
    root.leftChild.leftChild = new Node(50);
    root.rightChild.leftChild = new Node(60);
    root.rightChild.leftChild = new Node(70);

    const binaryTree = new BinaryTree(root);
    expect(binaryTree.isBalancedBinaryTree()).toEqual(true);
});