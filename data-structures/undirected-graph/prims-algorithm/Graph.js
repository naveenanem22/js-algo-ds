import Edge from "./Edge";

export default class Graph {
  constructor() {
    this.data = new Map();
  }

  addVertex(vertex) {
    this.data.set(vertex, []);
  }
  addEdge(sourceVertex, destinationVertex, weight) {
    const edge = new Edge(weight, sourceVertex, destinationVertex);
    if (this.data.has(sourceVertex)) {
      this.data.get(sourceVertex).push(edge);
    } else {
      this.data.set(sourceVertex, [edge]);
    }
  }
  getVertices() {
    return [...this.data.keys()];
  }
  getEdgesOf(vertex) {
    return this.data.get(vertex);
  }
}
