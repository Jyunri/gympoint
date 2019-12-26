import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import students from '~/store/modules/students/sagas';

export default function* rootSaga() {
  return yield all([auth, students]);
}
