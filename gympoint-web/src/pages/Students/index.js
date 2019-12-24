import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Student } from './styles';

export default function Students() {
  return (
    <Container>
      <header>
        <strong>Gerenciando alunos</strong>
        <div>
          <button type="button">Cadastrar</button>
          <input placeholder="Buscar aluno" />
        </div>
      </header>

      <ul>
        <Student>
          <span>Diego Fernandes</span>
          <span>diogo@rocketseat.com</span>
          <span>19</span>
          <Link to="/edit">editar</Link>
          <Link to="/delete">apagar</Link>
        </Student>
      </ul>
    </Container>
  );
}
