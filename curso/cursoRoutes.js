const CursoRepository = require("./cursoRepository");
const CursoServices = require("./cursoServices");
const CursoController = require("./cursoController");
class CursoRoutes {
  constructor(app) {
    this.app = app;
    this.setupRoutes();
  }

  setupRoutes() {
    const cursoRepository = new CursoRepository();
    const cursoService = new CursoServices(cursoRepository);
    const cursoController = new CursoController(cursoService);

    this.app.get("/curso/buscar", async (request, reply) => {
      try {
        const { code, body } = await cursoController.buscarTodos();
        reply.code(code).send(body);
      } catch (error) {
        reply.code(500).send({ message: `Erro interno do servidor ${error}` });
      }
    });

    this.app.get("/curso/buscar/:codcurso", async (request, reply) => {
      try {
        const { codcurso } = request.params;
       
        const { code, body } = await cursoController.buscarID(codcurso);
        reply.code(code).send(body);
      } catch (error) {
        reply.code(500).send({ message: `Erro interno do servidor: ${error}` });
      }
    });

    this.app.post("/curso/inserir", async (request, reply) => {
      try {
        const { codcurso, nome } = request.body;
        const { code, body } = await cursoController.inserirCurso(
          codcurso,
          nome
        );
        reply.code(code).send(body);
      } catch (error) {
        reply.code(500).send({ message: `Erro interno do servidor ${error}` });
      }
    });
    this.app.put("/curso/atualizar", async (req, res) => {
      try {
        const { codcurso, nome } = req.body;

        const { code, body } = await cursoController.atualizarCurso(
          codcurso,
          nome
        );
        console.log(body);
        res.status(code).send(body);
      } catch (error) {
        res.status(500).send(error);
      }
    });
    this.app.delete("/curso/deletar", async (req, res) => {
      try {
        const { codcurso } = req.body;
        const { code, body } = await cursoController.deletarCurso(codcurso);
        res.status(code).send(body);
      } catch (error) {
        res.status(500).send(error);
      }
    });
  }
}

module.exports = CursoRoutes;
