import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Cell } from './styles';
import history from '~/services/history';
import api from '~/services/api';

export default function Students() {
  const [students, setStudents] = useState([]);

  async function loadStudents() {
    const response = await api.get('students');
    setStudents(response.data);
  }

  useEffect(() => {
    loadStudents();
  }, []);

  function handleRegister() {
    history.push('/students/register');
  }

  async function handleDelete(student) {
    const confirmMessage = `Deseja realmente excluir o registro ${student.email}?`;

    // eslint-disable-next-line no-restricted-globals
    if (confirm(confirmMessage)) {
      await api.delete(`students/${student.id}`);
      loadStudents();
    }
  }

  function renderStudent(student) {
    return (
      <Row key={student.id}>
        <Cell size={30}>
          <span>{student.name}</span>
        </Cell>
        <Cell size={30}>
          <span>{student.email}</span>
        </Cell>
        <Cell size={10}>
          <span>{student.age}</span>
        </Cell>
        <Cell size={15}>
          {/* workaround to pass props through Link */}
          <Link
            to={{ pathname: `students/${student.id}/edit`, state: { student } }}
          >
            editar
          </Link>
        </Cell>
        <Cell size={15}>
          <button
            type="button"
            onClick={() => handleDelete(student)}
            student={student}
          >
            apagar
          </button>
        </Cell>
      </Row>
    );
  }

  return (
    <Container>
      <header>
        <strong>Gerenciando alunos</strong>
        <div>
          <button type="button" onClick={handleRegister}>
            Cadastrar
          </button>
          <input placeholder="Buscar aluno" />
        </div>
      </header>

      <ul>
        <Row>
          <Cell size={30}>
            <strong>NOME</strong>
          </Cell>
          <Cell size={30}>
            <strong>EMAIL</strong>
          </Cell>
          <Cell size={10}>
            <strong>IDADE</strong>
          </Cell>
          <Cell size={30}>
            <span />
          </Cell>
        </Row>
        {students.map(student => renderStudent(student))}
      </ul>
    </Container>
  );
}
