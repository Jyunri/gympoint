import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import Checkin from '~/components/Checkin';

import { Container, List } from './styles';
import Button from '~/components/Button';
import api from '~/services/api';

export default function Dashboard() {
  const user = useSelector(state => state.user.profile.user);
  const [checkIns, setCheckins] = useState([]);

  useEffect(() => {
    async function loadCheckins() {
      const response = await api.get(`students/${user.id}/checkins`);
      setCheckins(response.data);
    }

    loadCheckins();
  }, [user.id]);

  return (
    <Container>
      <Button>Novo check-in</Button>
      <List
        data={checkIns}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Checkin data={item} />}
      />
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
