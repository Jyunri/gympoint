export function registerStudentRequest(data) {
  return {
    type: '@student/REGISTER_STUDENT_REQUEST',
    payload: { data },
  };
}

export function registerStudentSuccess(student) {
  return {
    type: '@student/REGISTER_STUDENT_SUCCESS',
    payload: { student },
  };
}

export function registerStudentFailure() {
  return {
    type: '@student/REGISTER_STUDENT_FAILURE',
  };
}
