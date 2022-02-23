import Graph from "./Graph";
import { PriorityQueue } from "@datastructures-js/priority-queue";

export function getShortestPath(graph) {
  const edgePriorityQueue = new PriorityQueue({
    compare: (edgeA, edgeB) => {
      if (edgeA.weight < edgeB.weight) return -1;
      if (edgeA.weight > edgeB.weight) return 1;
    },
  });
  graph.data.get(10).forEach((edge) => {
    edgePriorityQueue.enqueue(edge);
  });
  graph.data.get(20).forEach((edge) => {
    edgePriorityQueue.enqueue(edge);
  });

  console.log(edgePriorityQueue.toArray());

  return [];
}
