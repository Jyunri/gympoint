import styled from 'styled-components/native';
import { grey, demonGrey, fadedGrey } from '~/styles/colors';

export const Container = styled.View`
  margin: 20px;
  padding: 20px;
  border: 1px solid ${fadedGrey};
  height: 60%;
`;

export const Question = styled.View`
  margin-bottom: 30%;
`;

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Left = styled.Text`
  font-weight: bold;
`;

export const Right = styled.Text`
  color: ${grey};
`;

export const Body = styled.Text.attrs({ numberOfLines: 7 })`
  color: ${demonGrey};
  font-size: 16px;
  line-height: 25;
`;

export const Answer = styled.View``;
