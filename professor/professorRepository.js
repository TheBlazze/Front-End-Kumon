const Connection = require("../config/database");

class ProfessorRepository {
  async buscarTodos() {
    const pg = Connection();
    try {
      await pg.connect();

      const result = await pg.query(
        "select * from professor WHERE DTEXCLUSAO IS NULL"
      );
      return result.rows;
    } catch (err) {
      console.error("Erro ao executar a consulta:", err);
    } finally {
      await pg.end();
    }
  }

  async buscarID(codprofessor) {
    const pg = Connection();
    try {
      await pg.connect();

      const result = await pg.query(
        `select * from professor WHERE codprofessor = ${codprofessor}`
      );

      return result.rows;
    } catch (err) {
      console.error("Erro ao executar a consulta:", err);
    } finally {
      await pg.end();
    }
  }

  async inserir(codprofessor, nome, esp, salario, status, telefone, email) {
    const pg = Connection();
    try {
      await pg.connect();
      await pg.query(`INSERT INTO PROFESSOR (CODPROFESSOR, NOME, ESP, SALARIO, STATUS, TELEFONE, EMAIL)
                          VALUES (${codprofessor}, '${nome}', '${esp}', ${salario}, '${status}', '${telefone}', '${email}');`);

      return `Professor cadastrado com sucesso !`;
    } catch (error) {
      console.log(error);
      throw `Erro ao cadastrar o aluno !`;
    } finally {
      await pg.end();
    }
  }

  async atualizar(codprofessor, nome, esp, salario, status, telefone, email) {
    const pg = Connection();
    try {
      await pg.connect();
      await pg.query(
        `UPDATE PROFESSOR SET NOME = '${nome}', ESP = '${esp}',SALARIO = ${salario}, STATUS = '${status}', TELEFONE = '${telefone}', EMAIL = '${email}'  WHERE CODPROFESSOR = ${codprofessor}`
      );
      const result = await this.buscarID(codprofessor);

      return {
        message: "Professor atualizado com sucesso !",
        professor: result,
      };
    } catch (error) {
      console.log(error);
      throw `Erro ao atualizar o aluno !`;
    } finally {
      await pg.end();
    }
  }

  async deletar(codprofessor) {
    const pg = Connection();
    try {
      await pg.connect();
      await pg.query(
        `UPDATE PROFESSOR SET DTEXCLUSAO = CURRENT_DATE WHERE CODPROFESSOR = ${codprofessor}`
      );
      return `Professor deletado com sucesso !`;
    } catch (error) {
      throw `Erro ao deletar o aluno !`;
    } finally {
      await pg.end();
    }
  }
}

module.exports = ProfessorRepository;
