const TurmaRepository = require("./turmaRepository");
const TurmaServices = require("./turmaServices");
const TurmaController = require("./turmaController");

class TurmaRoutes {
  constructor(app) {
    this.app = app;
    this.setupRoutes();
  }
  setupRoutes() {
    const turmaRepository = new TurmaRepository();
    const turmaService = new TurmaServices(turmaRepository);
    const turmaController = new TurmaController(turmaService);

    this.app.get("/turma/buscar", async (request, reply) => {
      try {
        const { code, body } = await turmaController.buscarTodos();
        reply.code(code).send(body);
      } catch (error) {
        reply.code(500).send({ message: `Erro interno do servidor ${error}` });
      }
    });

    this.app.get("/turma/buscar/:codTurma", async (request, reply) => {
      try {
        const { codTurma } = request.params;
        //console.log(codTurma);
        const { code, body } = await turmaController.buscarID(codTurma);
        reply.code(code).send(body);
      } catch (error) {
        reply.code(500).send({ message: `Erro interno do servidor ${error}` });
      }
    });

    this.app.post("/turma/inserir", async (request, reply) => {
      try {
        const { codturma, codcurso, sala, turno, tipo, dtini } = request.body;
        console.log(codturma, codcurso, sala, turno, tipo, dtini);
        const { code, body } = await turmaController.inserir(
          codturma,
          codcurso,
          sala,
          turno,
          tipo,
          dtini
        );
        reply.code(code).send(body);
      } catch (error) {
        reply.code(500).send({ message: `Erro interno do servidor ${error}` });
      }
    });

    this.app.put("/turma/atualizar", async (req, res) => {
      try {
        const { codturma, codcurso, sala, turno, tipo, dtini } = req.body;

        const { code, body } = await turmaController.atualizar(
          codturma,
          codcurso,
          sala,
          turno,
          tipo,
          dtini
        );
        console.log(body);
        res.status(code).send(body);
      } catch (error) {
        res.status(500).send(error);
      }
    });

    this.app.delete("/turma/deletar", async (req, res) => {
      try {
        const { codturma } = req.body;
        const { code, body } = await turmaController.deletar(codturma);
        res.status(code).send(body);
      } catch (error) {
        res.status(500).send(error);
      }
    });
  }
}
module.exports = TurmaRoutes;
