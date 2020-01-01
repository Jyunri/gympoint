import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  Question,
  Header,
  Left,
  Right,
  Body,
  Answer,
} from './styles';

export default function TicketDetail({ navigation }) {
  const ticket = navigation.getParam('ticket');

  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(ticket.createdAt), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [ticket.createdAt]);

  return (
    <Container>
      <Question>
        <Header>
          <Left>PERGUNTA</Left>
          <Right>{dateParsed}</Right>
        </Header>
        <Body>{ticket.question}</Body>
      </Question>
      <Answer>
        <Header>
          <Left>RESPOSTA</Left>
        </Header>
        <Body>{ticket.answer}</Body>
      </Answer>
    </Container>
  );
}
