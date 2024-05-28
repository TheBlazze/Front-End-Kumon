class NotaServices {
  constructor(repository) {
    this.repository = repository;
  }
  async buscarTodos() {
    return await this.repository.buscarTodos();
  }

  async buscarID(codaluno) {
    return await this.repository.buscarID(codaluno);
  }
  async inserirNota(codaluno, codmateria, codprofessor, nota) {
    return await this.repository.inserirNota(
      codaluno,
      codmateria,
      codprofessor,
      nota
    );
  }
  async atualizarNota(codaluno, nota) {
    return await this.repository.atualizarNota(codaluno, nota);
  }
}

module.exports = NotaServices;
