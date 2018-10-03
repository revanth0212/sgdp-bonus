import React from 'react'
import ReactDOM from 'react-dom'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'
import { Provider } from 'react-redux'

import AppView from './App'
import Store from './App/Store'

import './styles.css'

function App() {
  return (
    <div className="App">
      <Fabric>
        <Provider store={Store}>
          <AppView />
        </Provider>
      </Fabric>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
