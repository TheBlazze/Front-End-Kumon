class AlunoServices {
  constructor(repository) {
    this.repository = repository;
  }
  async buscarTodos() {
    return await this.repository.buscarTodos();
  }

  async buscarID(codaluno) {
    return await this.repository.buscarID(codaluno);
  }
  async inserirAluno(
    codaluno,
    nome,
    dtnasc,
    telefone,
    codcurso,
    dtmatricula,
    nomepai,
    nomemae
  ) {
    return await this.repository.inserirAluno(
      codaluno,
      nome,
      dtnasc,
      telefone,
      codcurso,
      dtmatricula,
      nomepai,
      nomemae
    );
  }
  async atualizarAluno(
    codaluno,
    nome,
    dtnasc,
    telefone,
    codcurso,
    nomepai,
    nomemae
  ) {
    return await this.repository.atualizarAluno(
      codaluno,
      nome,
      dtnasc,
      telefone,
      codcurso,
      nomepai,
      nomemae
    );
  }
  async deletarAluno(codaluno) {
    return await this.repository.deletarAluno(codaluno);
  }
}

module.exports = AlunoServices;
