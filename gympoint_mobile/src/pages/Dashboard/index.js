import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
import Checkin from '~/components/Checkin';

import { Container, List } from './styles';
import Button from '~/components/Button';
import api from '~/services/api';

export default function Dashboard() {
  const user = useSelector(state => state.user.profile.user);
  const [checkIns, setCheckins] = useState([]);

  async function loadCheckins() {
    const response = await api.get(`students/${user.id}/checkins`);
    setCheckins(response.data);
  }

  useEffect(() => {
    loadCheckins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  async function handleCreateCheckin() {
    try {
      await api.post(`students/${user.id}/checkins`);
      loadCheckins();
    } catch (err) {
      Alert.alert(
        'Algo deu errado',
        'Você só pode realizar 5 checkins dentro de um período de 7 dias corridos'
      );
    }
  }

  return (
    <Container>
      <Button onPress={handleCreateCheckin}>Novo check-in</Button>
      <List
        data={checkIns}
        keyExtractor={item => String(item.id)}
        renderItem={({ item, index }) => (
          <Checkin data={item} index={checkIns.length - index} />
        )}
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
