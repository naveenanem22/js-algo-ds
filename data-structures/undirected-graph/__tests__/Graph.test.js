import Graph from "../Graph";

test('Graph display test', () => {
    const graph = new Graph();
    graph.addNode(10);
    graph.display();
});