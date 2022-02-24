import Graph from "./Graph";
import { PriorityQueue } from "@datastructures-js/priority-queue";

export function getShortestPath(graph) {
  const edgesPriorityQueue = new PriorityQueue({
    compare: (edgeA, edgeB) => {
      if (edgeA.weight < edgeB.weight) return -1;
      if (edgeA.weight > edgeB.weight) return 1;
    },
  });

  const resultArray = [];
  const startVertex = graph.getVertices()[0];
  resultArray.push(startVertex);
  graph.getEdgesOf(startVertex).forEach((edge) => {
    edgesPriorityQueue.enqueue(edge);
  });

  while (!edgesPriorityQueue.isEmpty()) {
    const removedEdge = edgesPriorityQueue.dequeue();
    resultArray.push(removedEdge.destinationVertex);
    graph.getEdgesOf(removedEdge.destinationVertex).forEach((edge) => {
      edgesPriorityQueue.enqueue(edge);
    });
  }

  //console.log(edgePriorityQueue.toArray());

  return [];
}
