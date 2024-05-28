class ProfessorController {
  constructor(service) {
    this.service = service;
  }
  async buscarTodos() {
    try {
      const body = await this.service.buscarTodos();
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
  }

  async buscarID(codprofessor) {
    try {
      const body = await this.service.buscarID(codprofessor);
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
  }

  async inserir(codprofessor, nome, esp, salario, status, telefone, email) {
    try {
      const body = await this.service.inserir(
        codprofessor,
        nome,
        esp,
        salario,
        status,
        telefone,
        email
      );
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
  }

  async atualizar(codprofessor, nome, esp, salario, status, telefone, email) {
    try {
      const body = await this.service.atualizar(
        codprofessor,
        nome,
        esp,
        salario,
        status,
        telefone,
        email
      );
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
  }
  async deletar(codprofessor) {
    try {
      const body = await this.service.deletar(codprofessor);
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
  }
}

module.exports = ProfessorController;
