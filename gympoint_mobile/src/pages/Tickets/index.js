import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, List } from './styles';
import Button from '~/components/Button';
import Ticket from '~/components/Ticket';
import api from '~/services/api';

function Tickets({ navigation, isFocused }) {
  const user = useSelector(state => state.user.profile.user);
  const [tickets, setTickets] = useState([]);

  async function loadTickets() {
    const response = await api.get(`students/${user.id}/help-orders`);
    setTickets(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadTickets();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id, isFocused]);

  function handleCreateTicket() {
    navigation.navigate('NewTicket');
  }

  function handleOpenTicketDetail(ticket) {
    navigation.navigate('TicketDetail', { ticket });
  }

  return (
    <Container>
      <Button onPress={handleCreateTicket}>Novo pedido de auxílio</Button>
      <List
        data={tickets}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Ticket data={item} onPress={handleOpenTicketDetail} />
        )}
      />
    </Container>
  );
}

Tickets.navigationOptions = {
  tabBarLabel: 'Pedir Ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="help" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Tickets);
