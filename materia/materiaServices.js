class MateriaServices {
  constructor(repository) {
    this.repository = repository;
  }

  async buscarTodos() {
    return await this.repository.buscarTodos();
  }

  async buscarID(codmateria) {
    return await this.repository.buscarID(codmateria);
  }
  async inserir(codmateria, codcurso, codprofessor, nome, qthora) {
    return await this.repository.inserir(
      codmateria,
      codcurso,
      codprofessor,
      nome,
      qthora
    );
  }
  async atualizar(codmateria, codcurso, codprofessor, nome, qthora) {
    return await this.repository.atualizar(
      codmateria,
      codcurso,
      codprofessor,
      nome,
      qthora
    );
  }
  async deletar(codmateria) {
    return await this.repository.deletar(codmateria);
  }
}

module.exports = MateriaServices;
