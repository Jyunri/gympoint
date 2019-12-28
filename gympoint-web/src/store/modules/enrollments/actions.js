export function registerEnrollmentRequest(data) {
  return {
    type: '@enrollment/REGISTER_ENROLLMENT_REQUEST',
    payload: { data },
  };
}

export function registerEnrollmentSuccess(enrollment) {
  return {
    type: '@enrollment/REGISTER_ENROLLMENT_SUCCESS',
    payload: { enrollment },
  };
}

export function registerEnrollmentFailure() {
  return {
    type: '@enrollment/REGISTER_ENROLLMENT_FAILURE',
  };
}

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
