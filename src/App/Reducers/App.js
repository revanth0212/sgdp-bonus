import { lensProp, over, not } from 'ramda'

export default (state = { isNewUI: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_BETWEEN_UIS':
      return over(lensProp('isNewUI'), not, state)
    default:
      return state
  }
}
