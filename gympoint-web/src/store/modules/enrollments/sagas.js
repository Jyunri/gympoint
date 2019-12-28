import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import {
  registerEnrollmentSuccess,
  registerEnrollmentFailure,
  updateEnrollmentSuccess,
  updateEnrollmentFailure,
} from '~/store/modules/enrollments/actions';

export function* registerEnrollment({ payload }) {
  try {
    const { plan_id, start_date, student_id } = payload.data;

    const enrollment = {
      plan_id,
      start_date,
      student_id,
    };

    const response = yield call(api.post, 'enrollments', enrollment);

    toast.success('Matrícula criada com sucesso!');

    yield put(registerEnrollmentSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao criar a matrícula');

    yield put(registerEnrollmentFailure());
  }
}

export function* updateEnrollment({ payload }) {
  try {
    const { id, plan_id, start_date, student_id } = payload.data;

    const enrollment = {
      plan_id,
      start_date,
      student_id,
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
  takeLatest('@enrollment/REGISTER_ENROLLMENT_REQUEST', registerEnrollment),
  takeLatest('@enrollment/UPDATE_ENROLLMENT_REQUEST', updateEnrollment),
]);
