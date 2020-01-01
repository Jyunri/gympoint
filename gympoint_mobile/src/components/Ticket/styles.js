import styled from 'styled-components/native';
import { grey, fadedGrey, demonGrey, skyBlue } from '~/styles/colors';

export const Container = styled.View`
  align-items: center;
  border: 1px solid ${fadedGrey};
  border-radius: 4px;
  height: 150px;
  margin-bottom: 12px;
  padding: 20px 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 0px 10px;
  margin-bottom: 20px;
`;

export const Left = styled.Text`
  font-weight: bold;
  color: ${props => (props.answered ? skyBlue : grey)};
`;

export const Time = styled.Text`
  color: ${grey};
`;

export const Question = styled.Text.attrs({ numberOfLines: 3 })`
  color: ${demonGrey};
  align-self: flex-start;
  line-height: 25;
`;
