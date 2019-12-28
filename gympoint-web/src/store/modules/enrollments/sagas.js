import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import {
  answerTicketSuccess,
  answerTicketFailure,
} from '~/store/modules/tickets/actions';
import {
  updateEnrollmentSuccess,
  updateEnrollmentFailure,
} from '~/store/modules/enrollments/actions';

export function* updateEnrollment({ payload }) {
  try {
    const { id, plan_id, start_date } = payload.data;

    const enrollment = {
      plan_id,
      start_date,
    };

    const response = yield call(api.put, `enrollments/${id}`, enrollment);

    toast.success('Matrícula atualizada com sucesso!');

    yield put(updateEnrollmentSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao atualizar a matrícula');

    yield put(updateEnrollmentFailure());
  }
}

export default all([
  takeLatest('@enrollments/UPDATE_ENROLLMENT_REQUEST', updateEnrollment),
]);
