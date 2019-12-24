import React, { useState, useEffect } from 'react';

import { Container, Row, Edit, Delete, Cell } from './styles';
import history from '~/services/history';
import api from '~/services/api';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');
      setStudents(response.data);
    }
    loadStudents();
  }, []);

  function handleRegister() {
    history.push('/register');
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
          <Edit to="/edit" student={student}>
            editar
          </Edit>
        </Cell>
        <Cell size={15}>
          <Delete to="/delete" student={student}>
            apagar
          </Delete>
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
