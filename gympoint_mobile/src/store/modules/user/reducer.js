import produce from 'immer';

const INITIAL_STATE = {
  user: {},
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/SIGNIN_SUCCESS':
        draft.user = action.payload;
        break;
      default:
    }
  });
}
