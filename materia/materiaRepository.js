const Connection = require("../config/database");

class MateriaRepository {
  async buscarTodos() {
    const pg = Connection();
    try {
      await pg.connect();

      const result = await pg.query(
        "select * from materia WHERE DTEXCLUSAO IS NULL"
      );
      return result.rows;
    } catch (err) {
      console.error("Erro ao executar a consulta:", err);
    } finally {
      await pg.end();
    }
  }

  async buscarID(codmateria) {
    const pg = Connection();
    try {
      await pg.connect();

      const result = await pg.query(
        `select * from materia WHERE codmateria = ${codmateria}`
      );

      return result.rows;
    } catch (err) {
      console.error("Erro ao executar a consulta:", err);
    } finally {
      await pg.end();
    }
  }

  async inserir(codmateria, codcurso, codprofessor, nome, qthora) {
    const pg = Connection();
    try {
      await pg.connect();
      await pg.query(`INSERT INTO materia (codmateria, codcurso, codprofessor, nome, qtdhora)
                                  VALUES (${codmateria}, ${codcurso}, ${codprofessor}, '${nome}', ${qthora});`);

      return `Materia cadastrado com sucesso !`;
    } catch (error) {
      console.log(error);
      throw `Erro ao cadastrar o aluno !`;
    } finally {
      await pg.end();
    }
  }

  async atualizar(codmateria, codcurso, codprofessor, nome, qthora) {
    const pg = Connection();
    try {
      await pg.connect();
      await pg.query(
        `UPDATE materia SET  CODCURSO = ${codcurso}, CODPROFESSOR = ${codprofessor}, NOME = '${nome}', qtdhora = ${qthora}  WHERE codmateria = ${codmateria}`
      );
      const result = await this.buscarID(codmateria);

      return {
        message: "Materia atualizado com sucesso !",
        materia: result,
      };
    } catch (error) {
      console.log(error);
      throw `Erro ao atualizar o aluno !`;
    } finally {
      await pg.end();
    }
  }

  async deletar(codmateria) {
    const pg = Connection();
    try {
      await pg.connect();
      await pg.query(
        `UPDATE materia SET DTEXCLUSAO = CURRENT_DATE WHERE codmateria = ${codmateria}`
      );
      return `Materia deletado com sucesso !`;
    } catch (error) {
      throw `Erro ao deletar o aluno !`;
    } finally {
      await pg.end();
    }
  }
}
module.exports = MateriaRepository;
