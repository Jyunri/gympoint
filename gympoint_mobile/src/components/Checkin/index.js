import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Left, Time } from './styles';

export default function Checkin({ data, index }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.createdAt), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data]);

  return (
    <Container>
      {/* cant use id here since there are other students */}
      <Left>Check-in #{index}</Left>
      <Time>{dateParsed}</Time>
    </Container>
  );
}
