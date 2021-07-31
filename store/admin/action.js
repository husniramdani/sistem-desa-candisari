export const formActionTypes = {
  ADD_STEP_1: 'ADD_STEP_1',
  ADD_STEP_2: 'ADD_STEP_2',
  ADD_STEP_3: 'ADD_STEP_3',
  ADD_STEP_4: 'ADD_STEP_4',
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
