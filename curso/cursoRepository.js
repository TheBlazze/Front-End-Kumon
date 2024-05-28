const Connection = require("../config/database");
class CursoRepository {
  async buscarTodos() {
    const pg = Connection();
    try {
      await pg.connect();

      const result = await pg.query(
        "SELECT * FROM curso WHERE DTEXCLUSAO IS NULL"
      );
      return result.rows;
    } catch (err) {
      console.error("Erro ao executar a consulta:", err);
    } finally {
      await pg.end();
    }
  }

  async buscarID(codcurso) {
    const pg = Connection();
    try {
     
      await pg.connect();

      const result = await pg.query(
        `SELECT * FROM curso WHERE codcurso = ${codcurso}`
      );
      if (result.rows.length === 0) {
        throw "Curso não encontrado!";
      }

      const cursoObj = {
        codcurso: result.rows[0].codcurso,
        nome: result.rows[0].nome,
        dtexclusao: result.rows[0].dtexclusao,
      };
      return cursoObj;
    } catch (err) {
      throw ("Erro ao executar a consulta:", err);
    } finally {
      await pg.end();
    }
  }

  async inserirCurso(
    codcurso,
    nome
    //dtexclusao
  ) {
    const pg = Connection();
    try {
      await pg.connect();

      await pg.query(`INSERT INTO CURSO (CODCURSO, NOME)
                      VALUES (${codcurso}, '${nome}')`);

      const buscar = await this.buscarID(codcurso);

      return { message: `Curso cadastrado com sucesso !`, curso: buscar };
    } catch (error) {
      console.log(error);
      throw `Erro ao cadastrar o curso !`;
    } finally {
      await pg.end();
    }
  }

  async atualizarCurso(codcurso, nome) {
    const pg = Connection();
    try {
      await pg.connect();
      await pg.query(
        `UPDATE CURSO SET NOME = '${nome}' WHERE CODCURSO = ${codcurso}`
      );
      const result = await this.buscarID(codcurso);

      const cursoObj = {
        nome: result[0].nome,
      };

      return { message: "Curso atualizado com sucesso !", curso: cursoObj };
    } catch (error) {
      throw `Erro ao atualizar curso !`;
    } finally {
      await pg.end();
    }
  }
  async deletarCurso(codcurso) {
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
  }
}
module.exports = CursoRepository;
