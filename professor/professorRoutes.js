const ProfessorRepository = require("./professorRepository");
const ProfessorServices = require("./professorServices");
const ProfessorController = require("./professorController");

class ProfessorRoutes {
  constructor(app) {
    this.app = app;
    this.setupRoutes();
  }
  setupRoutes() {
    const professorRepository = new ProfessorRepository();
    const professorService = new ProfessorServices(professorRepository);
    const professorController = new ProfessorController(professorService);

    this.app.get("/professor/buscar", async (request, reply) => {
      try {
        const { code, body } = await professorController.buscarTodos();
        reply.code(code).send(body);
      } catch (error) {
        reply.code(500).send({ message: `Erro interno do servidor ${error}` });
      }
    });

    this.app.get("/professor/buscar/:codprofessor", async (request, reply) => {
      try {
        const { codprofessor } = request.params;
        //console.log(codprofessor);
        const { code, body } = await professorController.buscarID(codprofessor);
        reply.code(code).send(body);
      } catch (error) {
        reply.code(500).send({ message: `Erro interno do servidor ${error}` });
      }
    });

    this.app.post("/professor/inserir", async (request, reply) => {
      try {
        const { codprofessor, nome, esp, salario, status, telefone, email } =
          request.body;

        const { code, body } = await professorController.inserir(
          codprofessor,
          nome,
          esp,
          salario,
          status,
          telefone,
          email
        );
        reply.code(code).send(body);
      } catch (error) {
        reply.code(500).send({ message: `Erro interno do servidor ${error}` });
      }
    });

    this.app.put("/professor/atualizar", async (req, res) => {
      try {
        const { codprofessor, nome, esp, salario, status, telefone, email } =
          req.body;

        const { code, body } = await professorController.atualizar(
          codprofessor,
          nome,
          esp,
          salario,
          status,
          telefone,
          email
        );
        console.log(body);
        res.status(code).send(body);
      } catch (error) {
        res.status(500).send(error);
      }
    });

    this.app.delete("/professor/deletar", async (req, res) => {
      try {
        const { codprofessor } = req.body;
        const { code, body } = await professorController.deletar(
          codprofessor
        );
        res.status(code).send(body);
      } catch (error) {
        res.status(500).send(error);
      }
    });
  }
}
module.exports = ProfessorRoutes;
