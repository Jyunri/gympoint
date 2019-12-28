import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import students from '~/store/modules/students/sagas';
import plans from '~/store/modules/plans/sagas';
import tickets from '~/store/modules/tickets/sagas';
import enrollments from '~/store/modules/enrollments/sagas';

export default function* rootSaga() {
  return yield all([auth, students, plans, tickets, enrollments]);
}
