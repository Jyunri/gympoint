import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { lightBlack, coralRed, fadedGrey } from '~/styles/colors';

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
  }

  ul {
    background: #fff;
    margin-top: 30px;
    border-radius: 4px;
  }
`;

export const Row = styled.li`
  padding: 20px;
  background: #fff;
  display: flex;
  justify-content: space-between;

  & + li {
    border-top: 1px solid #eee;
  }

  span {
    color: ${fadedGrey};
  }

  button {
    border: none;
    color: #4d85ee;
  }
`;

export const Cell = styled.div`
  ${props =>
    props.size &&
    css`
      flex-basis: ${props.size}%;
    `}
`;
