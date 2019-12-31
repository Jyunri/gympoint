import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '~/services/api';
import { signInSuccess, signFailure } from '~/store/modules/user/actions';

export function* signIn({ payload }) {
  try {
    const { studentId } = payload.data;

    const response = yield call(api.get, `students/${studentId}`);

    yield put(signInSuccess(response.data));
  } catch (error) {
    Alert.alert(
      'Falha na autenticacao',
      'Houve um erro no login, verifique seus dados'
    );

    yield put(signFailure());
  }
}

export default all([takeLatest('@user/SIGNIN_REQUEST', signIn)]);
