import { combineReducers } from 'redux'

import fields from './Fields'

export default asyncReducer => {
  const appReducer = combineReducers({
    fields,
    ...asyncReducer
  })
  const rootReducer = (state, action) => appReducer(state, action)
  return rootReducer
}
