import Graph from "./Graph";
import { PriorityQueue } from "@datastructures-js/priority-queue";

export function getShortestPath(graph) {
  const edgesPriorityQueue = new PriorityQueue({
    compare: (edgeA, edgeB) => {
      if (edgeA.weight < edgeB.weight) return -1;
      if (edgeA.weight > edgeB.weight) return 1;
    },
  });

  const resultSet = new Set();
  const startVertex = graph.getVertices()[0];
  resultSet.add(startVertex);
  graph.getEdgesOf(startVertex).forEach((edge) => {
    edgesPriorityQueue.enqueue(edge);
  });

  /*while (resultSet.size !== graph.getVertices.length) {
    const removedEdge = edgesPriorityQueue.dequeue();
    resultSet.add(removedEdge.destinationVertex);
    graph.getEdgesOf(removedEdge.destinationVertex).forEach((edge) => {
      if (!resultSet.has(edge.destinationVertex)) {
        edgesPriorityQueue.enqueue(edge);
      }

    });
  }*/

  console.log(resultSet);

  return resultSet;
}
