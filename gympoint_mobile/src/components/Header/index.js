import React from 'react';

import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { signOut } from '~/store/modules/user/actions';
import { grey } from '~/styles/colors';

import { SignOutButton } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  return (
    <SignOutButton
      onPress={() => {
        dispatch(signOut());
      }}
    >
      <Icon name="exit-to-app" size={20} color={grey} />
    </SignOutButton>
  );
}
