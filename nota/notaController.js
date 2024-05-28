class NotaController {
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

  async inserirNota(codaluno, codmateria, codprofessor, nota) {
    try {
      const body = await this.service.inserirNota(
        codaluno,
        codmateria,
        codprofessor,
        nota
      );
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
  }

  async atualizarNota(nota, codaluno) {
    try {
      const body = await this.service.atualizarNota(nota, codaluno);
      return { code: 200, body: body };
    } catch (error) {
      return {
        code: 400,
        body: { message: `${error}` },
      };
    }
  }
  /* async deletarNota(nota) {
        try {
          const body = await this.service.deletarNota(nota);
          return { code: 200, body: body };
        } catch (error) {
          return {
            code: 400,
            body: { message: `${error}` },
          };
        }
      }*/
}
module.exports = NotaController;
