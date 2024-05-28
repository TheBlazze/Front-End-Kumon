const AlunoRepository = require("./alunoRepository");
const AlunoServices = require("./alunoServices");
const AlunoController = require("./alunoController");

class AlunoRoutes {
  constructor(app) {
    this.app = app;
    this.setupRoutes();
  }

  setupRoutes() {
    const alunoRepository = new AlunoRepository();
    const alunoService = new AlunoServices(alunoRepository);
    const alunoController = new AlunoController(alunoService);

    this.app.get("/aluno/buscar", async (request, reply) => {
      try {
        const { code, body } = await alunoController.buscarTodos();
        reply.code(code).send(body);
      } catch (error) {
        reply.code(500).send({ message: `Erro interno do servidor ${error}` });
      }
    });

    this.app.get("/aluno/buscar/:codaluno", async (request, reply) => {
      try {
        const { codaluno } = request.params;
        console.log(codaluno);
        const { code, body } = await alunoController.buscarID(codaluno);
        reply.code(code).send(body);
      } catch (error) {
        reply.code(500).send({ message: `Erro interno do servidor ${error}` });
      }
    });

    this.app.post("/aluno/inserir", async (request, reply) => {
      try {
        const {
          codaluno,
          nome,
          dtnasc,
          telefone,
          codcurso,
          dtmatricula,
          nomepai,
          nomemae,
        } = request.body;

        console.log(
          codaluno,
          nome,
          dtnasc,
          telefone,
          codcurso,
          dtmatricula,
          nomepai,
          nomemae
        );
        const { code, body } = await alunoController.inserirAluno(
          codaluno,
          nome,
          dtnasc,
          telefone,
          codcurso,
          dtmatricula,
          nomepai,
          nomemae
        );
        reply.code(code).send(body);
      } catch (error) {
        reply.code(500).send({ message: `Erro interno do servidor ${error}` });
      }
    });
    this.app.put("/aluno/atualizar", async (req, res) => {
      try {
        const { codaluno, nome, dtnasc, telefone, codcurso, nomepai, nomemae } =
          req.body;

        const { code, body } = await alunoController.atualizarAluno(
          codaluno,
          nome,
          dtnasc,
          telefone,
          codcurso,
          nomepai,
          nomemae
        );
        console.log(body);
        res.status(code).send(body);
      } catch (error) {
        res.status(500).send(error);
      }
    });
    this.app.delete("/aluno/deletar", async (req, res) => {
      try {
        const { codaluno } = req.body;
        const { code, body } = await alunoController.deletarAluno(codaluno);
        res.status(code).send(body);
      } catch (error) {
        res.status(500).send(error);
      }
    });
  }
}
module.exports = AlunoRoutes;
