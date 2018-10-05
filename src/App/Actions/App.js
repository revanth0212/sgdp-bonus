export const toggleBetweenUIs = () => dispatch => {
  dispatch({
    type: 'TOGGLE_BETWEEN_UIS'
  })
}

export const toggleBetweenSharedComponents = () => dispatch => {
  dispatch({
    type: 'TOGGLE_BETWEEN_SHARED_COMPONENTS'
  })
}
