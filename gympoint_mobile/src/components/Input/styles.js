import styled from 'styled-components/native';
import { grey, lightBlack } from '~/styles/colors';

export const Container = styled.View`
  padding: 0 15px;
  height: 50px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: grey,
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: ${lightBlack};
`;
