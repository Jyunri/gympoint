import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Header, Left, Time, Question } from './styles';

export default function Ticket({ data }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.createdAt), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data]);

  return (
    <Container>
      {/* cant use id here since there are other students */}
      <Header>
        <Left answered={data.answer_at}>
          {data.answer_at ? 'Respondido' : 'Sem resposta'}
        </Left>
        <Time>{dateParsed}</Time>
      </Header>
      <Question>{data.question}</Question>
    </Container>
  );
}
