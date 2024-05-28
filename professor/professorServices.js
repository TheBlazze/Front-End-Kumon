class ProfessorServices {
  constructor(repository) {
    this.repository = repository;
  }

  async buscarTodos() {
    return await this.repository.buscarTodos();
  }

  async buscarID(codprofessor) {
    return await this.repository.buscarID(codprofessor);
  }
  async inserir(codprofessor, nome, esp, salario, status, telefone, email) {
    return await this.repository.inserir(
      codprofessor,
      nome,
      esp,
      salario,
      status,
      telefone,
      email
    );
  }
  async atualizar(codprofessor, nome, esp, salario, status, telefone, email) {
    return await this.repository.atualizar(
      codprofessor,
      nome,
      esp,
      salario,
      status,
      telefone,
      email
    );
  }
  async deletar(codprofessor) {
    return await this.repository.deletar(codprofessor);
  }
}
module.exports = ProfessorServices;
