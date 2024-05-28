const Connection = require("../config/database");

class AlunoRepository {
  async buscarTodos() {
    const pg = Connection();
    try {
      await pg.connect();

      const result = await pg.query(
        "SELECT * FROM aluno WHERE DTEXCLUSAO IS NULL"
      );
      return result.rows;
    } catch (err) {
      console.error("Erro ao executar a consulta:", err);
    } finally {
      await pg.end();
    }
  }

  async buscarID(codaluno) {
    const pg = Connection();
    try {
      await pg.connect();

      const result = await pg.query(
        `SELECT * FROM aluno WHERE codaluno = ${codaluno}`
      );

      return result.rows;
    } catch (err) {
      console.error("Erro ao executar a consulta:", err);
    } finally {
      await pg.end();
    }
  }

  async inserirAluno(
    codaluno,
    nome,
    dtnasc,
    telefone,
    codcurso,
    dtmatricula,
    nomepai,
    nomemae
  ) {
    const pg = Connection();
    try {
      await pg.connect();
      await pg.query(`INSERT INTO ALUNO (CODALUNO, NOME, DTNASC,TELEFONE,CODCURSO, DTMATRICULA,NOMEPAI,NOMEMAE)
                      VALUES (${codaluno}, '${nome}', '${dtnasc}', '${telefone}', ${codcurso}, '${dtmatricula}', '${nomepai}', '${nomemae}');`);

      return `Aluno cadastrado com sucesso !`;
    } catch (error) {
      console.log(error);
      throw `Erro ao cadastrar o aluno !`;
    } finally {
      await pg.end();
    }
  }
  async atualizarAluno(
    codaluno,
    nome,
    dtnasc,
    telefone,
    codcurso,
    nomepai,
    nomemae
  ) {
    const pg = Connection();
    try {
      await pg.connect();
      await pg.query(
        `UPDATE ALUNO SET NOME = '${nome}', DTNASC = '${dtnasc}',TELEFONE = '${telefone}', CODCURSO = ${codcurso}, NOMEPAI = '${nomepai}', NOMEMAE = '${nomemae}'  WHERE CODALUNO = ${codaluno}`
      );
      const result = await this.buscarID(codaluno);

      return { message: "Aluno atualizado com sucesso !", aluno: result };
    } catch (error) {
      throw `Erro ao atualizar o aluno !`;
    } finally {
      await pg.end();
    }
  }
  async deletarAluno(codaluno) {
    const pg = Connection();
    try {
      await pg.connect();
      await pg.query(
        `UPDATE ALUNO SET DTEXCLUSAO = CURRENT_DATE WHERE CODALUNO = ${codaluno}`
      );
      return `Aluno deletado com sucesso !`;
    } catch (error) {
      throw `Erro ao deletar o aluno !`;
    } finally {
      await pg.end();
    }
  }
}
module.exports = AlunoRepository;
