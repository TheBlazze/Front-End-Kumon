class CursoServices {
  constructor(repository) {
    this.repository = repository;
  }
  async buscarTodos() {
    return await this.repository.buscarTodos();
  }

  async buscarID(codcurso) {
    return await this.repository.buscarID(codcurso);
  }
  async inserirCurso(codcurso, nome) {
    return await this.repository.inserirCurso(codcurso, nome);
  }
  async atualizarCurso(codcurso, nome, dtexclusao) {
    return await this.repository.atualizarCurso(codcurso, nome, dtexclusao);
  }
  async deletarCurso(codcurso) {
    return await this.repository.deletarCurso(codcurso);
  }
}
module.exports = CursoServices;
