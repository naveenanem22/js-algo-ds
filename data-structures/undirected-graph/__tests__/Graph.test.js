import Graph from "../Graph";

test('Graph display test', () => {
    const graph = new Graph();
    graph.addNode(10);
    graph.addNode(20);
    graph.addNode(30);
    graph.addNode(40);
    graph.addNode(50);
    graph.addEdge(10, 20);
    graph.addEdge(10, 30);
    graph.addEdge(10, 40);
    graph.addEdge(20, 40);
    graph.addEdge(40, 50);
    graph.display();

});