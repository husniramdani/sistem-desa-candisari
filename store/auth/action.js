export const formActionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
}

export const login = (data) => (dispatch) => {
  return dispatch({
    type: formActionTypes.LOGIN,
    data: data
  })
}

export const logout = () => (dispatch) => {
  return dispatch({
    type: formActionTypes.LOGOUT,
  })
}
