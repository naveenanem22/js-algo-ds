class Graph {

    constructor(nodes) {
        this.nodes = {};
    }

    addNode(data) {
        this.nodes[data] = [];
    }

    display() {
        console.log(this.nodes);
    }


}

export default Graph;