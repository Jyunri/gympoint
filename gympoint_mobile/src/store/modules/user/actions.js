export function signInRequest(studentId) {
  return {
    type: '@user/SIGNIN_REQUEST',
    payload: { studentId },
  };
}

export function signInSuccess(user) {
  return {
    type: '@user/SIGNIN_SUCCESS',
    payload: { user },
  };
}

export function signFailure() {
  return {
    type: '@user/SIGN_FAILURE',
  };
}
