// index.js

const Hypergraph = require('./hypergraph');
const HypergraphReasoning = require('./hypergraph-reasoning');

class HypergraphAgent {
  constructor() {
    this.hypergraph = new Hypergraph();
    this.reasoning = new HypergraphReasoning(this.hypergraph);
  }

  createHypergraph() {
    this.hypergraph.addNode('A', 'Node A');
    this.hypergraph.addNode('B', 'Node B');
    this.hypergraph.addNode('C', 'Node C');
    this.hypergraph.addHyperedge('AB', 'Hyperedge AB', ['A', 'B']);
    this.hypergraph.addHyperedge('BC', 'Hyperedge BC', ['B', 'C']);
  }

  reasonAboutHypergraph() {
    const relationships = this.reasoning.inferRelationships(this.hypergraph.getNode('A'), this.hypergraph.getNode('C'));
    console.log('Relações entre A e C:', relationships);

    const commonalities = this.reasoning.findCommonalities(this.hypergraph.getNode('A'), this.hypergraph.getNode('C'));
    console.log('Comunalidades entre A e C:', commonalities);

    const differences = this.reasoning.findDifferences(this.hypergraph.getNode('A'), this.hypergraph.getNode('C'));
    console.log('Diferenças entre A e C:', differences);
  }

  visualizeHypergraph() {
    console.log('Hipergrafo:');
    console.log(this.hypergraph.getNodes());
    console.log(this.hypergraph.getHyperedges());
  }

  run() {
    this.createHypergraph();
    this.reasonAboutHypergraph();
    this.visualizeHypergraph();
  }
}

const agent = new HypergraphAgent();
agent.run();