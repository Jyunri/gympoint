import styled from 'styled-components';
import { darken } from 'polished';
import { white, coralRed, lightBlack, grey, lightGrey2 } from '~/styles/colors';

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
    color: ${grey};
    line-height: 1.6;
  }

  form {
    display: flex;
    flex-direction: column;
    background: ${white};

    label {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;

      strong {
        margin-bottom: 8px;
        font-size: 14px;
      }

      textarea {
        background: ${white};
        border: 1px solid ${lightGrey2};
        border-radius: 4px;
        height: 127px;
        padding: 15px;
        color: ${lightBlack};
        font-size: 14px;
        margin: 0 0 10px;
        resize: none;

        &::placeholder {
          color: ${lightGrey2};
        }
      }
    }

    button {
      height: 40px;
      width: 100%;

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
`;
