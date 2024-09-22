// hypergraph.js

class Hypergraph {
  constructor() {
    this.nodes = {};
    this.hyperedges = {};
  }

  addNode(id, label) {
    this.nodes[id] = { id, label };
  }

  addHyperedge(id, label, nodes) {
    this.hyperedges[id] = { id, label, nodes };
  }

  getNodes() {
    return Object.values(this.nodes);
  }

  getHyperedges() {
    return Object.values(this.hyperedges);
  }

  traverse(startNode, callback) {
    const visited = new Set();
    const stack = [startNode];

    while (stack.length > 0) {
      const node = stack.pop();
      if (!visited.has(node.id)) {
        visited.add(node.id);
        callback(node);
        stack.push(...this.getNeighbors(node));
      }
    }
  }

  getNeighbors(node) {
    const neighbors = [];
    Object.values(this.hyperedges).forEach((hyperedge) => {
      if (hyperedge.nodes.includes(node.id)) {
        neighbors.push(...hyperedge.nodes.filter((id) => id !== node.id));
      }
    });
    return neighbors.map((id) => this.nodes[id]);
  }
}

module.exports = Hypergraph;