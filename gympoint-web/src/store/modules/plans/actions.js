export function registerPlanRequest(data) {
  return {
    type: '@plan/REGISTER_PLAN_REQUEST',
    payload: { data },
  };
}

export function registerPlanSuccess(plan) {
  return {
    type: '@plan/REGISTER_PLAN_SUCCESS',
    payload: { plan },
  };
}

export function registerPlanFailure() {
  return {
    type: '@plan/REGISTER_PLAN_FAILURE',
  };
}

export function updatePlanRequest(data) {
  return {
    type: '@plan/UPDATE_PLAN_REQUEST',
    payload: { data },
  };
}

export function updatePlanSuccess(plan) {
  return {
    type: '@plan/UPDATE_PLAN_SUCCESS',
    payload: { plan },
  };
}

export function updatePlanFailure() {
  return {
    type: '@plan/UPDATE_PLAN_FAILURE',
  };
}
