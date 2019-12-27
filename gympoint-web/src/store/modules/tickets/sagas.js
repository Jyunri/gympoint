import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import {
  answerTicketSuccess,
  answerTicketFailure,
} from '~/store/modules/tickets/actions';

export function* answerTicket({ payload }) {
  try {
    const { id, answer } = payload.data;

    const data = {
      answer,
    };

    const response = yield call(api.post, `help-orders/${id}/answer`, data);

    toast.success('Ticket respondido com sucesso!');

    yield put(answerTicketSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao responder o ticket');

    yield put(answerTicketFailure());
  }
}

export default all([takeLatest('@ticket/ANSWER_TICKET_REQUEST', answerTicket)]);
