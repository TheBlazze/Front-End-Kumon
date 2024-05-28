const NotaRepository = require("./notaRepository");
const NotaServices = require("./notaServices");
const NotaController = require("./notaController");

class NotaRoutes {
  constructor(app) {
    this.app = app;
    this.setupRoutes();
  }

  setupRoutes() {
    const notaRepository = new NotaRepository();
    const notaService = new NotaServices(notaRepository);
    const notaController = new NotaController(notaService);

    this.app.get("/nota/buscar", async (request, reply) => {
      try {
        const { code, body } = await notaController.buscarTodos();
        reply.code(code).send(body);
      } catch (error) {
        reply.code(500).send({ message: `Erro interno do servidor ${error}` });
      }
    });

    this.app.get("/nota/buscar/:codaluno", async (request, reply) => {
      try {
        const { codaluno } = request.params;
        console.log(codaluno);
        const { code, body } = await notaController.buscarID(codaluno);
        reply.code(code).send(body);
      } catch (error) {
        reply.code(500).send({ message: `Erro interno do servidor ${error}` });
      }
    });

    this.app.post("/nota/inserir", async (request, reply) => {
      try {
        const { codaluno, codmateria, codprofessor, nota } = request.body;

        console.log(codaluno, codmateria, codprofessor, nota);
        const { code, body } = await notaController.inserirNota(
          codaluno,
          codmateria,
          codprofessor,
          nota
        );
        reply.code(code).send(body);
      } catch (error) {
        reply.code(500).send({ message: `Erro interno do servidor ${error}` });
      }
    });
    this.app.put("/nota/atualizar", async (req, res) => {
      try {
        const { nota, codaluno } = req.body;

        const { code, body } = await notaController.atualizarNota(
          nota,
          codaluno
        );
        console.log(body);
        res.status(code).send(body);
      } catch (error) {
        res.status(500).send(error);
      }
    });
    /*this.app.delete("/curso/deletar", async (req, res) => {
          try {
            const { codcurso } = req.body;
            const { code, body } = await cursoController.deletarCurso(codcurso);
            res.status(code).send(body);
          } catch (error) {
            res.status(500).send( error);
          }
        });*/
  }
}
module.exports = NotaRoutes;
