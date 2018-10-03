import React from 'react'
import { connect } from 'react-redux'

import RegistrationPage from './Views/RegistrationPage'
import NewRegistrationPage from './Views/NewRegistrationPage'
import { toggleBetweenUIs } from './Actions/App'
import './simple-grid.css'

const App = props => (props.renderNewUI ? <NewRegistrationPage {...props} /> : <RegistrationPage {...props} />)

const mapStateToProps = state => ({
  renderNewUI: state.app.isNewUI
})

export default connect(
  mapStateToProps,
  { toggleBetweenUIs }
)(App)
