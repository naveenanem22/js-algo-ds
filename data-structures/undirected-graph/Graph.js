import _ from "lodash";

class Graph {

    constructor(nodes) {
        this.nodes = {};
    }

    addNode(data) {
        this.nodes[data] = [];
    }
    addEdge(source, destination) {
        if (!this.nodes[source].includes(destination)) {
            this.nodes[source].push(destination);
        }
        if (!this.nodes[destination].includes(source)) {
            this.nodes[destination].push(source);
        }
    }

    display() {
        console.log(this.nodes);
    }


}

export default Graph;