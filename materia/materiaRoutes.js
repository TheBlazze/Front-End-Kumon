const MateriaRepository = require("./materiaRepository");
const MateriaServices = require("./materiaServices");
const MateriaController = require("./materiaController");
class MateriaRoutes {
  constructor(app) {
    this.app = app;
    this.setupRoutes();
  }
  setupRoutes() {
    const materiaRepository = new MateriaRepository();
    const materiaService = new MateriaServices(materiaRepository);
    const materiaController = new MateriaController(materiaService);

    this.app.get("/materia/buscar", async (request, reply) => {
      try {
        const { code, body } = await materiaController.buscarTodos();
        reply.code(code).send(body);
      } catch (error) {
        reply.code(500).send({ message: `Erro interno do servidor ${error}` });
      }
    });

    this.app.get("/materia/buscar/:codmateria", async (request, reply) => {
      try {
        const { codmateria } = request.params;
        //console.log(codTurma);
        const { code, body } = await materiaController.buscarID(codmateria);
        reply.code(code).send(body);
      } catch (error) {
        reply.code(500).send({ message: `Erro interno do servidor ${error}` });
      }
    });

    this.app.post("/materia/inserir", async (request, reply) => {
      try {
        const { codmateria, codcurso, codprofessor, nome, qthora } =
          request.body;
        console.log(codmateria, codcurso, codprofessor, nome, qthora);
        const { code, body } = await materiaController.inserir(
          codmateria,
          codcurso,
          codprofessor,
          nome,
          qthora
        );
        reply.code(code).send(body);
      } catch (error) {
        reply.code(500).send({ message: `Erro interno do servidor ${error}` });
      }
    });

    this.app.put("/materia/atualizar", async (req, res) => {
      try {
        const { codmateria, codcurso, codprofessor, nome, qthora } = req.body;

        const { code, body } = await materiaController.atualizar(
          codmateria,
          codcurso,
          codprofessor,
          nome,
          qthora
        );
        console.log(body);
        res.status(code).send(body);
      } catch (error) {
        res.status(500).send(error);
      }
    });

    this.app.delete("/materia/deletar", async (req, res) => {
      try {
        const { codmateria } = req.body;
        const { code, body } = await materiaController.deletar(codmateria);
        res.status(code).send(body);
      } catch (error) {
        res.status(500).send(error);
      }
    });
  }
}

module.exports = MateriaRoutes;
