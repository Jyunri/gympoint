import styled from 'styled-components';
import { darken } from 'polished';
import { coralRed } from '~/styles/colors';

export const Container = styled.div`
  height: 100%;
  background: ${coralRed}
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  max-height: 448px;
  padding: 50px 30px;
  text-align: center;
  background: #fff;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      text-align: start;

      strong {
        margin-bottom: 10px;
        font-size: 12px;
      }

      input {
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: #000;
        margin: 0 0 10px;

        &::placeholder {
          color: #999;
        }
      }
    }

    button {
      background: ${coralRed};
      border: 0;
      border-radius: 4px;
      height: 44px;
      color: #fff;
      font-weight: bold;
      font-size: 14px;
      margin: 5px 0 0;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, coralRed)};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
