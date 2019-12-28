export function updateEnrollmentRequest(data) {
  return {
    type: '@enrollment/UPDATE_ENROLLMENT_REQUEST',
    payload: { data },
  };
}

export function updateEnrollmentSuccess(enrollment) {
  return {
    type: '@enrollment/UPDATE_ENROLLMENT_SUCCESS',
    payload: { enrollment },
  };
}

export function updateEnrollmentFailure() {
  return {
    type: '@enrollment/UPDATE_ENROLLMENT_FAILURE',
  };
}
