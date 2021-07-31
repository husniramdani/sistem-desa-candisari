import { formActionTypes } from './action'

const formInitialState = {
  username: "",
  isLogin: false,
}

export default function reducer(state = formInitialState, action) {
  switch (action.type) {
    case formActionTypes.LOGIN:
      return Object.assign({}, state, {
        username: action.data.username,
        isLogin: action.data.isLogin,
      })
    case formActionTypes.LOGOUT:
      return Object.assign({}, state, {
        username: "",
        isLogin: false,
      })
    default:
      return state
  }
}
