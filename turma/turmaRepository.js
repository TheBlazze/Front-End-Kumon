const Connection = require("../config/database");
class TurmaRepository {
  async buscarTodos() {
    const pg = Connection();
    try {
      await pg.connect();

      const result = await pg.query(
        "select * from turma WHERE DTEXCLUSAO IS NULL"
      );
      return result.rows;
    } catch (err) {
      console.error("Erro ao executar a consulta:", err);
    } finally {
      await pg.end();
    }
  }

  async buscarID(codturma) {
    const pg = Connection();
    try {
      await pg.connect();

      const result = await pg.query(
        `select * from turma WHERE codturma = ${codturma}`
      );

      return result.rows;
    } catch (err) {
      console.error("Erro ao executar a consulta:", err);
    } finally {
      await pg.end();
    }
  }

  async inserir(codturma, codcurso, sala, turno, tipo, dtini) {
    const pg = Connection();
    try {
      await pg.connect();
      await pg.query(`INSERT INTO turma (codturma, codcurso, sala, turno, tipo, dtinicio)
                              VALUES (${codturma}, ${codcurso}, ${sala}, '${turno}', '${tipo}', '${dtini}');`);

      return `turma cadastrado com sucesso !`;
    } catch (error) {
      console.log(error);
      throw `Erro ao cadastrar o aluno !`;
    } finally {
      await pg.end();
    }
  }

  async atualizar(codturma, codcurso, sala, turno, tipo, dtini) {
    const pg = Connection();
    try {
      await pg.connect();
      await pg.query(
        `UPDATE turma SET CODCURSO = ${codcurso}, sala = ${sala},turno = '${turno}', tipo = '${tipo}', dtinicio = '${dtini}'  WHERE codturma = ${codturma}`
      );
      const result = await this.buscarID(codturma);

      return {
        message: "turma atualizado com sucesso !",
        turma: result,
      };
    } catch (error) {
      console.log(error);
      throw `Erro ao atualizar o aluno !`;
    } finally {
      await pg.end();
    }
  }

  async deletar(codturma) {
    const pg = Connection();
    try {
      await pg.connect();
      await pg.query(
        `UPDATE turma SET DTEXCLUSAO = CURRENT_DATE WHERE codturma = ${codturma}`
      );
      return `turma deletado com sucesso !`;
    } catch (error) {
      throw `Erro ao deletar o aluno !`;
    } finally {
      await pg.end();
    }
  }
}
module.exports = TurmaRepository;
