class TurmaServices {
  constructor(repository) {
    this.repository = repository;
  }
  async buscarTodos() {
    return await this.repository.buscarTodos();
  }

  async buscarID(codturma) {
    return await this.repository.buscarID(codturma);
  }
  async inserir(codturma, codcurso, sala, turno, tipo, dtini) {
    return await this.repository.inserir(
      codturma,
      codcurso,
      sala,
      turno,
      tipo,
      dtini
    );
  }
  async atualizar(codturma, codcurso, sala, turno, tipo, dtini) {
    return await this.repository.atualizar(
      codturma,
      codcurso,
      sala,
      turno,
      tipo,
      dtini
    );
  }
  async deletar(codturma) {
    return await this.repository.deletar(codturma);
  }
}
module.exports = TurmaServices;
