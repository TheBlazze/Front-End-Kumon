class CursoController {
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

  async buscarID(codcurso) {
    try {
      
      const body = await this.service.buscarID(codcurso);
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
  }

  async inserirCurso(codcurso, nome) {
    try {
      const body = await this.service.inserirCurso(codcurso, nome);
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
  }

  async atualizarCurso(codcurso, nome, dtexclusao) {
    try {
      const body = await this.service.atualizarCurso(
        codcurso,
        nome,
        dtexclusao
      );
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
  }
  async deletarCurso(codcurso) {
    try {
      const body = await this.service.deletarCurso(codcurso);
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
  }
}

module.exports = CursoController;
