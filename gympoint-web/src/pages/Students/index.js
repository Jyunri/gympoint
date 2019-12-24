import React from 'react';

import { Container, Student, Edit, Delete } from './styles';
import history from '~/services/history';

export default function Students() {
  function handleRegister() {
    history.push('/register');
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
        <Student>
          <span>Diego Fernandes</span>
          <span>diogo@rocketseat.com</span>
          <span>19</span>
          <Edit to="/edit">editar</Edit>
          <Delete to="/delete">apagar</Delete>
        </Student>
        <Student>
          <span>Diego Fernandes</span>
          <span>diogo@rocketseat.com</span>
          <span>19</span>
          <Edit to="/edit">editar</Edit>
          <Delete to="/delete">apagar</Delete>
        </Student>
      </ul>
    </Container>
  );
}
