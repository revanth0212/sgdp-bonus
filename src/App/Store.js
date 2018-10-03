import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import createReducer from './Reducers'

const config = { enableDevTools: true }

const middleware = [thunk]

const dummyDevTools = f => f

const validDevTools = window.devToolsExtension ? window.devToolsExtension() : dummyDevTools

const getReduxDevTools = (enableDevTools = false) => (enableDevTools ? validDevTools : dummyDevTools)

export const injectAsyncReducer = (store, name, asyncReducer) => {
  store.asyncReducers[name] = asyncReducer
  store.replaceReducer(createReducer(store.asyncReducers))
}

const enhancer = compose(
  applyMiddleware(...middleware),
  getReduxDevTools(config.enableDevTools)
)

const configureStore = () => {
  const store = createStore(createReducer(), enhancer)
  store.asyncReducers = {}
  return store
}
export default configureStore({})
