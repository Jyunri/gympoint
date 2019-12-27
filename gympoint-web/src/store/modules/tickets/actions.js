export function answerTicketRequest(data) {
  return {
    type: '@ticket/ANSWER_TICKET_REQUEST',
    payload: { data },
  };
}

export function answerTicketSuccess(ticket) {
  return {
    type: '@ticket/ANSWER_TICKET_SUCCESS',
    payload: { ticket },
  };
}

export function answerTicketFailure() {
  return {
    type: '@ticket/ANSWER_TICKET_FAILURE',
  };
}
