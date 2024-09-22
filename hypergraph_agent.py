class HypergraphAgent:
    """
    Classe que representa um agente que opera em um hipergrafo.
    """

    def generate_embedding(self):
        """
        Gera um embedding para o hipergrafo.

        Raises:
            NotImplementedError: Este método precisa ser implementado em uma subclasse.
        """
        raise NotImplementedError("O método generate_embedding precisa ser implementado.")

    def visualize_hypergraph(self):
        """
        Visualiza o hipergrafo.

        Raises:
            NotImplementedError: Este método precisa ser implementado em uma subclasse.
        """
        raise NotImplementedError("O método visualize_hypergraph precisa ser implementado.")