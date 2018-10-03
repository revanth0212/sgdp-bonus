import { set, lensPath, drop, pathOr } from 'ramda'

import FieldsInitialState from '../InitialStates/Fields'

export default (state = FieldsInitialState, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD_VALUE': {
      const { changes } = action
      let newState = { ...state }
      changes.forEach(({ path, props: updatedProps }) => {
        const oldProps = pathOr({}, drop(1, path), newState)
        const fieldLens = lensPath(drop(1, path))
        newState = set(fieldLens, { ...oldProps, ...updatedProps }, newState)
      })
      return newState
    }
    default:
      return state
  }
}
