import React from 'react'
import { connect } from 'react-redux'

import RegistrationPage from './Views/RegistrationPage'
import NewRegistrationPage from './Views/NewRegistrationPage'
import { toggleBetweenUIs, toggleBetweenSharedComponents } from './Actions/App'
import './simple-grid.css'

const App = ({ renderNewUI, ...otherProps }) =>
  renderNewUI ? <NewRegistrationPage {...otherProps} /> : <RegistrationPage {...otherProps} />

const mapStateToProps = state => ({
  renderNewUI: state.app.isNewUI,
  renderMUIComponents: state.app.renderMUIComponents
})

export default connect(
  mapStateToProps,
  { toggleBetweenUIs, toggleBetweenSharedComponents }
)(App)
