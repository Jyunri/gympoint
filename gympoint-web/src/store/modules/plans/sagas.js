import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import {
  registerPlanSuccess,
  registerPlanFailure,
  updatePlanSuccess,
  updatePlanFailure,
} from '~/store/modules/plans/actions';

export function* registerPlan({ payload }) {
  try {
    const { title, duration, price } = payload.data;

    const plan = {
      title,
      duration,
      price,
    };

    const response = yield call(api.post, 'plans', plan);

    toast.success('Plano criado com sucesso!');

    yield put(registerPlanSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao criar o plano');

    yield put(registerPlanFailure());
  }
}

export function* updatePlan({ payload }) {
  try {
    const { id, title, duration, price } = payload.data;

    const plan = {
      title,
      duration,
      price,
    };

    const response = yield call(api.put, `plans/${id}`, plan);

    toast.success('Plano atualizado com sucesso!');

    yield put(updatePlanSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao atualizar o plano');

    yield put(updatePlanFailure());
  }
}

export default all([
  takeLatest('@plan/REGISTER_PLAN_REQUEST', registerPlan),
  takeLatest('@plan/UPDATE_PLAN_REQUEST', updatePlan),
]);
