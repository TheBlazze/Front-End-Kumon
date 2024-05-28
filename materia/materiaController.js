class MateriaController {
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

  async buscarID(codmateria) {
    try {
      const body = await this.service.buscarID(codmateria);
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
  }

  async inserir(codmateria, codcurso, codprofessor, nome, qthora) {
    try {
      const body = await this.service.inserir(
        codmateria,
        codcurso,
        codprofessor,
        nome,
        qthora
      );
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
  }

  async atualizar(codmateria, codcurso, codprofessor, nome, qthora) {
    try {
      const body = await this.service.atualizar(
        codmateria,
        codcurso,
        codprofessor,
        nome,
        qthora
      );
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
  }
  async deletar(codmateria) {
    try {
      const body = await this.service.deletar(codmateria);
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
  }
}

module.exports = MateriaController;
