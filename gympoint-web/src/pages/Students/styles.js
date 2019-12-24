import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';
import { lightBlack, coralRed } from '~/styles/colors';

export const Container = styled.div`
  margin: 30px 120px;

  header {
    display: flex;
    justify-content: space-between;
    align-self: center;
    align-items: center;

    strong {
      color: ${lightBlack};
      font-size: 24px;
      margin-right: 15px;
    }

    button {
      height: 36px;
      width: 140px;
      margin: 0px 10px;

      border: 0;
      border-radius: 4px;
      background: ${coralRed};
      color: #fff;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, coralRed)};
      }
    }

    input {
      height: 36px;
      width: 240px;
      text-align: center;
    }
  }

  ul {
    background: #fff;
    margin-top: 30px;
    border-radius: 4px;
  }
`;

export const Student = styled.li`
  padding: 20px;
  background: #fff;
  display: flex;
  justify-content: space-between;

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
  }

  & + li {
    border-top: 1px solid #eee;
  }
`;

export const Edit = styled(Link)`
  color: '#4D85EE';
`;

export const Delete = styled(Link)`
  color: ${coralRed};
`;
