import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { Alert, ActivityIndicator } from 'react-native';
import { coralRed } from '~/styles/colors';
import Checkin from '~/components/Checkin';

import { Container, List } from './styles';
import Button from '~/components/Button';
import api from '~/services/api';

export default function Dashboard() {
  const user = useSelector(state => state.user.profile.user);
  const [checkIns, setCheckins] = useState([]);

  // infinite scroll concern
  const LIMIT = 5;
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  async function loadCheckins() {
    setLoading(true);
    const response = await api.get(`students/${user.id}/checkins?page=${page}`);
    setCheckins(response.data);
    setLoading(false);
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

  function renderSpinner() {
    return <ActivityIndicator color={coralRed} />;
  }

  async function loadMore() {
    // there is need to fetch api if there is less rows than maximun
    // accumulated capacity for current page
    if (checkIns.length >= page * LIMIT) {
      setLoading(true);
      const response = await api.get(
        `students/${user.id}/checkins?page=${page + 1}`
      );
      setPage(page + 1);
      setCheckins([...checkIns, ...response.data]);
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
        data={checkIns}
        keyExtractor={item => String(item.id)}
        renderItem={({ item, index }) => (
          <Checkin data={item} index={checkIns.length - index} />
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
      <Button onPress={handleCreateCheckin}>Novo check-in</Button>
      {loading ? renderSpinner() : renderList()}
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
