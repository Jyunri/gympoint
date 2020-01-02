import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { ActivityIndicator } from 'react-native';
import { Container, List } from './styles';
import Button from '~/components/Button';
import Ticket from '~/components/Ticket';
import api from '~/services/api';
import { coralRed } from '~/styles/colors';

function Tickets({ navigation, isFocused }) {
  const user = useSelector(state => state.user.profile.user);
  const [tickets, setTickets] = useState([]);

  // infinite scroll concern
  const LIMIT = 5;
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  async function loadTickets() {
    setLoading(true);
    const response = await api.get(
      `students/${user.id}/help-orders?page=${page}`
    );
    setTickets(response.data);
    setLoading(false);
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

  function renderSpinner() {
    return <ActivityIndicator color={coralRed} />;
  }

  async function loadMore() {
    // there is need to fetch api if there is less rows than maximun
    // accumulated capacity for current page
    if (tickets.length >= page * LIMIT) {
      setLoading(true);
      const response = await api.get(
        `students/${user.id}/help-orders?page=${page + 1}`
      );
      setPage(page + 1);
      setTickets([...tickets, ...response.data]);
      setLoading(false);
    }
  }

  function refreshList() {
    setRefreshing(true);
    setPage(1); // callback to reload is expected
    setRefreshing(false);
  }

  function renderList() {
    return (
      <List
        data={tickets}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Ticket data={item} onPress={handleOpenTicketDetail} />
        )}
        onEndReachedThreshold={0.2}
        onEndReached={loadMore}
        onRefresh={refreshList}
        refreshing={refreshing}
      />
    );
  }

  return (
    <Container>
      <Button onPress={handleCreateTicket}>Novo pedido de auxílio</Button>
      {loading ? renderSpinner() : renderList()}
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
