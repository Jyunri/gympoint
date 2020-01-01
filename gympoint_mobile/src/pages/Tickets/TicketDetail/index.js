import React from 'react';
import { Text } from 'react-native';

// import { Container } from './styles';

export default function TicketDetail({ navigation }) {
  const ticket = navigation.getParam('ticket');

  return <Text>{ticket.question}</Text>;
}
