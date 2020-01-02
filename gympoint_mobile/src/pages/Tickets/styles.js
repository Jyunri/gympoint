import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 40px 20px;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
})`
  max-height: 80%; /** required to infinite scrolling */
  margin: 20px 0px;
`;
