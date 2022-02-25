import Graph from "../Graph";
import { getShortestPath } from "../PrimsAlgorithm";
import { test, expect } from "@jest/globals";

test("Prims algorithm test", () => {
  const graph = new Graph();
  graph.addVertex(10);
  graph.addVertex(20);
  graph.addVertex(30);
  graph.addVertex(40);
  graph.addVertex(50);
  graph.addEdge(10, 30, 3);
  graph.addEdge(30, 10, 3);
  graph.addEdge(30, 20, 10);
  graph.addEdge(30, 50, 6);
  graph.addEdge(30, 40, 2);
  graph.addEdge(20, 30, 10);
  graph.addEdge(20, 40, 4);
  graph.addEdge(40, 20, 4);
  graph.addEdge(40, 30, 2);
  graph.addEdge(40, 50, 1);
  graph.addEdge(50, 30, 6);
  graph.addEdge(50, 40, 1);


  expect(getShortestPath(graph)).toEqual([10, 30, 40, 50, 20])
});
