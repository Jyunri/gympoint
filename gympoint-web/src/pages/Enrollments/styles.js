import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { white, lightBlack, coralRed, grey, skyBlue } from '~/styles/colors';

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
      color: ${white};
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, coralRed)};
      }
    }
  }

  ul {
    background: ${white};
    margin-top: 30px;
    border-radius: 4px;
  }
`;

export const Row = styled.li`
  padding: 20px;
  background: ${white};
  display: flex;
  justify-content: space-between;

  span {
    color: ${grey};
  }

  a {
    color: ${skyBlue};
  }

  button {
    border: none;
    color: ${coralRed};
  }
`;

export const Cell = styled.div`
  ${props =>
    props.size &&
    css`
      flex-basis: ${props.size}%;
    `}
`;
