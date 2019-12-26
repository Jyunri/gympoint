import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import {
  registerStudentSuccess,
  registerStudentFailure,
  updateStudentSuccess,
  updateStudentFailure,
} from '~/store/modules/students/actions';

export function* registerStudent({ payload }) {
  try {
    const { name, email, age, weight, height } = payload.data;

    const student = {
      name,
      email,
      age,
      weight,
      height,
    };

    const response = yield call(api.post, 'students', student);

    toast.success('Aluno criado com sucesso!');

    yield put(registerStudentSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao criar o aluno');

    yield put(registerStudentFailure());
  }
}

export function* updateStudent({ payload }) {
  try {
    const { id, name, email, age, weight, height } = payload.data;

    const student = {
      name,
      email,
      age,
      weight,
      height,
    };

    const response = yield call(api.put, `students/${id}`, student);

    toast.success('Aluno atualizado com sucesso!');

    yield put(updateStudentSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao atualizar o aluno');

    yield put(updateStudentFailure());
  }
}

export default all([
  takeLatest('@student/REGISTER_STUDENT_REQUEST', registerStudent),
  takeLatest('@student/UPDATE_STUDENT_REQUEST', updateStudent),
]);
