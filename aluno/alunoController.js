class AlunoController {
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

  async buscarID(codaluno) {
    try {
      const body = await this.service.buscarID(codaluno);
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
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
    try {
      const body = await this.service.inserirAluno(
        codaluno,
        nome,
        dtnasc,
        telefone,
        codcurso,
        dtmatricula,
        nomepai,
        nomemae
      );
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
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
    try {
      const body = await this.service.atualizarAluno(
        codaluno,
        nome,
        dtnasc,
        telefone,
        codcurso,
        nomepai,
        nomemae
      );
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
  }
  async deletarAluno(codaluno) {
    try {
      const body = await this.service.deletarAluno(codaluno);
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
  }
}
module.exports = AlunoController;
