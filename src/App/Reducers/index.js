import { combineReducers } from 'redux'

import app from './App'
import fields from './Fields'

export default asyncReducer => {
  const appReducer = combineReducers({
    app,
    fields,
    ...asyncReducer
  })
  const rootReducer = (state, action) => appReducer(state, action)
  return rootReducer
}
