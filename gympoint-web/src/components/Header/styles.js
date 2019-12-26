import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { coralRed, lightBlack, fadedGrey } from '~/styles/colors';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border-bottom: 1px solid #ddd;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #ddd;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const NavLink = styled(Link)`
  margin-right: 20px;
  font-weight: bold;
  color: ${props => (props.current === 'true' ? '#333' : fadedGrey)};
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: ${lightBlack};
    }

    button {
      display: block;
      margin-top: 4px;
      border: 0;
      font-size: 12px;
      color: ${coralRed};
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
  }
`;
