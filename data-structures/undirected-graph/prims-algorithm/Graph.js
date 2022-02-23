import Edge from "./Edge";

export default class Graph {
  constructor() {
    this.data = new Map();
  }

  addVertex(vertex) {
    this.data.set(vertex, []);
  }
  addEdge(sourceVertex, destinationVertex, weight) {
    const edge = new Edge(weight, destinationVertex);
    this.data.set(sourceVertex, edge);
  }  
}
