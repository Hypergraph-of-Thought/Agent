import unittest

from hypergraph_agent import HypergraphAgent


class TestHypergraphAgent(unittest.TestCase):
    """
    Classe de teste para a classe HypergraphAgent.
    """

    def setUp(self):
        """
        Configura o ambiente de teste antes de cada método de teste.
        """
        self.agent = HypergraphAgent()

    def test_generate_embedding(self):
        """
        Testa se o método generate_embedding lança NotImplementedError.
        """
        with self.assertRaises(NotImplementedError):
            self.agent.generate_embedding()

    def test_visualize_hypergraph(self):
        """
        Testa se o método visualize_hypergraph lança NotImplementedError.
        """
        with self.assertRaises(NotImplementedError):
            self.agent.visualize_hypergraph()


if __name__ == '__main__':
    unittest.main()