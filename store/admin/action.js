export const formActionTypes = {
  RESET_FORM: 'RESET_FORM',
  SET_STEP: 'SET_STEP',
  ADD_STEP_1: 'ADD_STEP_1',
  ADD_STEP_2: 'ADD_STEP_2',
  ADD_STEP_3: 'ADD_STEP_3',
  ADD_STEP_4: 'ADD_STEP_4',
}

export const onResetForm = () => (dispatch) => {
  return dispatch({
    type: formActionTypes.RESET_FORM,
  })
}

export const setStep = (data) => (dispatch) => {
  return dispatch({
    type: formActionTypes.SET_STEP,
    data: data
  })
}

export const addStep1 = (data) => (dispatch) => {
  return dispatch({
    type: formActionTypes.ADD_STEP_1,
    data: data
  })
}

export const addStep2 = (data) => (dispatch) => {
  return dispatch({
    type: formActionTypes.ADD_STEP_2,
    data: data
  })
}

export const addStep3 = (data) => (dispatch) => {
  return dispatch({
    type: formActionTypes.ADD_STEP_3,
    data: data
  })
}

export const addStep4 = (data) => (dispatch) => {
  return dispatch({
    type: formActionTypes.ADD_STEP_4,
    data: data
  })
}
