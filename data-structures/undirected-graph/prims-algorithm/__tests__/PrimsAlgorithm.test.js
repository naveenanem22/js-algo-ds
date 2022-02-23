import Graph from "../Graph";
import { getShortestPath } from "../PrimsAlgorithm";

test("Prims algorithm test", () => {
  const graph = new Graph();
  graph.addVertex(10);
  graph.addVertex(20);
  graph.addVertex(30);
  graph.addVertex(40);
  graph.addVertex(50);
  graph.addVertex(60);
  graph.addEdge(10, 20, 3);
  graph.addEdge(10, 30, 4);
  graph.addEdge(10, 50, 7);
  graph.addEdge(20, 40, 1);
  graph.addEdge(30, 50, 8);
  graph.addEdge(40, 60, 2);
});
