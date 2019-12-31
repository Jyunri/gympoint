export function signInRequest(studentId) {
  return {
    type: '@user/SIGN_IN_REQUEST',
    payload: { studentId },
  };
}

export function signInSuccess(user) {
  return {
    type: '@user/SIGN_IN_SUCCESS',
    payload: { user },
  };
}

export function signFailure() {
  return {
    type: '@user/SIGN_FAILURE',
  };
}
