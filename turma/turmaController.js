class TurmaController {
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

  async buscarID(codturma) {
    try {
      const body = await this.service.buscarID(codturma);
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
  }

  async inserir(codturma, codcurso, sala, turno, tipo, dtini) {
    try {
      const body = await this.service.inserir(
        codturma,
        codcurso,
        sala,
        turno,
        tipo,
        dtini
      );
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
  }

  async atualizar(codturma, codcurso, sala, turno, tipo, dtini) {
    try {
      const body = await this.service.atualizar(
        codturma,
        codcurso,
        sala,
        turno,
        tipo,
        dtini
      );
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
  }
  async deletar(codturma) {
    try {
      const body = await this.service.deletar(codturma);
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
  }
}
module.exports = TurmaController;
