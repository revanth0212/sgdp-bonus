import { lensProp, over, not } from 'ramda'

export default (state = { isNewUI: false, renderMUIComponents: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_BETWEEN_UIS':
      return over(lensProp('isNewUI'), not, state)
    case 'TOGGLE_BETWEEN_SHARED_COMPONENTS':
      return over(lensProp('renderMUIComponents'), not, state)
    default:
      return state
  }
}
