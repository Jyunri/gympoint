import styled from 'styled-components';
import { darken } from 'polished';
import {
  white,
  lightBlack,
  coralRed,
  lightGrey2,
  fadedGrey,
  grey,
} from '~/styles/colors';

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
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 30px;
    background: ${white};

    label {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;

      strong {
        margin-bottom: 8px;
        font-size: 14px;
      }

      input {
        background: ${white};
        border: 1px solid ${lightGrey2};
        border-radius: 4px;
        height: 44px;
        padding: 15px;
        color: ${grey};
        margin: 0 0 10px;

        &::placeholder {
          color: ${lightGrey2};
        }

        &:read-only {
          background: ${lightGrey2};
        }
      }

      .react-select__control {
        width: 100%;
        border: 1px solid ${lightGrey2};
        height: 44px;
      }

      .react-select__value-container {
        height: 44px;
        align-content: center;
        color: ${fadedGrey};
      }

      .react-select__menu-list {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    }

    div {
      display: flex;
      justify-content: space-between;

      > label {
        flex-basis: 20%;
      }
    }
  }
`;

export const ConfirmButton = styled.button`
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
`;

export const CancelButton = styled.button`
  height: 36px;
  width: 140px;
  margin: 0px 10px;

  border: 0;
  border-radius: 4px;
  background: ${fadedGrey};
  color: ${white};
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.08, fadedGrey)};
  }
`;
