import styled from 'styled-components';
import { darken } from 'polished';
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Student = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;
