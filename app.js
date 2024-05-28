const fastify = require("fastify");
const cors = require("@fastify/cors");
const app = fastify({ logger: true });

app.register(cors, {
  origin: "*",
});

const AlunoRoutes = require("./aluno/alunoRoutes");
const ProfessorRoutes = require("./professor/professorRoutes");
const TurmaRoutes = require("./turma/turmaRoutes");
const MateriaRoutes = require("./materia/materiaRoutes");
const CursoRoutes = require("./curso/cursoRoutes");
const NotaRoutes = require("./nota/notaRoutes");

const alunoRoutes = new AlunoRoutes(app);
const professorRoutes = new ProfessorRoutes(app);
const turmaRoutes = new TurmaRoutes(app);
const materiaRoutes = new MateriaRoutes(app);
const cursoRoutes = new CursoRoutes(app);
const notaRoutes = new NotaRoutes(app);

module.exports = app;
