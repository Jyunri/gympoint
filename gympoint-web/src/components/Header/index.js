import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Container, Content, Profile, NavLink } from './styles';
import logo from '~/assets/images/header-logo.png';
import { signOut } from '~/store/modules/auth/actions';

export default function Header({ currentPath }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  function handleSignOut() {
    dispatch(signOut());
  }

  function isCurrentPath(path) {
    return (currentPath === path).toString();
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />
          <NavLink to="/students" current={isCurrentPath('/students')}>
            ALUNOS
          </NavLink>
          <NavLink to="/plans" current={isCurrentPath('/plans')}>
            PLANOS
          </NavLink>
          <NavLink to="/enrollments" current={isCurrentPath('/enrollments')}>
            MATRÍCULAS
          </NavLink>
          <NavLink to="/tickets" current={isCurrentPath('/tickets')}>
            PEDIDOS DE AUXÍLIO
          </NavLink>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{user.name}</strong>
              <button type="button" onClick={handleSignOut}>
                Sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
