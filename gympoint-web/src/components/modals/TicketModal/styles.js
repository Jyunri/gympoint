import styled from 'styled-components';
import { darken } from 'polished';
import { coralRed, lightBlack, fadedGrey } from '~/styles/colors';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  padding: 10px;

  strong {
    margin-bottom: 10px;
  }

  span {
    margin-bottom: 30px;
    color: ${fadedGrey};
  }

  form {
    display: flex;
    flex-direction: column;
    background: #fff;

    label {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;

      strong {
        margin-bottom: 8px;
        font-size: 14px;
      }

      input {
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        height: 127px;
        padding: 15px;
        color: ${lightBlack};
        margin: 0 0 10px;

        &::placeholder {
          color: #ddd;
        }
      }
    }

    button {
      height: 40px;
      width: 100%;

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
`;
