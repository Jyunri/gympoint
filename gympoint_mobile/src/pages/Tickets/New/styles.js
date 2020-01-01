import styled from 'styled-components/native';
import Input from '~/components/Input';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 40px 20px;
`;

export const Question = styled(Input).attrs({
  multiline: true,
  numberOfLines: 7,
})`
  padding-top: 20px;
  align-items: flex-start;
  height: 60%;
  margin-bottom: 20px;
`;
