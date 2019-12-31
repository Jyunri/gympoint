import React from 'react';
import { View } from 'react-native';
import Input from 'react-native-vector-icons/MaterialIcons';
import Button from '~/components/Button';
import Background from '~/components/Background';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Input
        style={{ marginTop: 30 }}
        icon="call"
        placeholder="Digite seu nome"
      />
      <Button>Entrar no sistema</Button>
    </Background>
  );
}
