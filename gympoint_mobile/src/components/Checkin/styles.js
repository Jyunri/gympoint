import styled from 'styled-components/native';
import { grey, fadedGrey } from '~/styles/colors';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${fadedGrey};
  border-radius: 4px;
  height: 50px;
  margin-bottom: 12px;
  padding: 0 20px;
`;

export const Left = styled.Text`
  font-weight: bold;
`;

export const Time = styled.Text`
  color: ${grey};
`;
