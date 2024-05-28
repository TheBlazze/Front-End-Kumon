const Connection = require("../config/database");
class NotaRepository {
  async buscarTodos() {
    const pg = Connection();
    try {
      await pg.connect();

      const result = await pg.query("SELECT * FROM NOTA");
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
        `SELECT * FROM NOTA WHERE codaluno = ${codaluno}`
      );

      return result.rows;
    } catch (err) {
      console.error("Erro ao executar a consulta:", err);
    } finally {
      await pg.end();
    }
  }

  async inserirNota(
    codaluno,
    codmateria,
    codprofessor,
    nota

    //dtexclusao
  ) {
    const pg = Connection();
    try {
      await pg.connect();
      await pg.query(`INSERT INTO NOTA (CODALUNO, CODMATERIA, CODPROFESSOR, NOTA)
                          VALUES (${codaluno}, ${codmateria}, ${codprofessor}, ${nota})`);
      const buscar = await this.buscarID(codaluno);

      return { message: `Curso cadastrado com sucesso !`, nota: buscar };
    } catch (error) {
      console.log(error);
      throw `Erro ao cadastrar o curso !`;
    } finally {
      await pg.end();
    }
  }

  async atualizarNota(nota, codaluno) {
    const pg = Connection();
    try {
      await pg.connect();
      await pg.query(
        `UPDATE NOTA SET NOTA = '${nota}' WHERE CODALUNO = ${codaluno}`
      );
      const result = await this.buscarID(codaluno);

      const notaObj = {
        nota: result[0].nota,
        codaluno: result[0].codaluno,
      };

      return { message: "Curso atualizado com sucesso !", nota: notaObj };
    } catch (error) {
      throw `Erro ao atualizar curso !`;
    } finally {
      await pg.end();
    }
  }
  /*async deletarCurso(codcurso) {
        const pg = Connection();
        try {
          await pg.connect();
          await pg.query(
            `UPDATE CURSO SET DTEXCLUSAO = CURRENT_DATE WHERE CODCURSO = ${codcurso}`
          );
          return `Curso deletado com sucesso !`;
        } catch (error) {
          throw `Erro ao deletar curso !`;
        } finally {
          await pg.end();
        }
      } */
}
module.exports = NotaRepository;
