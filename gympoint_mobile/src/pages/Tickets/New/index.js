import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { Container, Question } from './styles';
import Button from '~/components/Button';
import api from '~/services/api';

export default function New({ navigation }) {
  const [question, setQuestion] = useState('');
  const user = useSelector(state => state.user.profile.user);

  async function onSubmit() {
    if (!question) {
      return Alert.alert('Pedido não pode ficar em branco');
    }
    try {
      await api.post(`students/${user.id}/help-orders`, { question });
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível enviar pedido');
    }
  }

  return (
    <Container>
      <Question
        onChangeText={setQuestion}
        placeholder="Inclua seu pedido de auxílio"
        value={question}
        autoCorrect={false}
      />
      <Button onPress={onSubmit}>Enviar Pedido</Button>
    </Container>
  );
}
