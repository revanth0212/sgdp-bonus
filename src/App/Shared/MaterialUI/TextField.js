import React from 'react'
import OriginalTextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { pathOr } from 'ramda'

import { updateFieldValue } from '../../Actions/Fields'
import FieldConstants from '../../Constants/Fields'

const onFieldChangeHandler = (updateFieldValue, onChange) => (_, value) => {
  updateFieldValue(value)
  if (onChange) {
    onChange(value)
  }
}

const TextField = ({ configuration, name, path, onChange = () => {}, updateFieldValue, ...otherProps }) => {
  const finalProps = {
    ...FieldConstants[name],
    ...configuration,
    ...otherProps
  }
  return (
    <OriginalTextField
      {...finalProps}
      fullWidth
      name={name}
      placeholder=""
      floatingLabelText={finalProps.label}
      errorText={finalProps.required ? 'This field is required' : ''}
      onChange={onFieldChangeHandler(updateFieldValue, onChange(name))}
    />
  )
}

const mapStateToProps = (state, { path = [] }) => ({
  configuration: pathOr({}, path, state)
})

const mapDispatchToProps = (dispatch, { name, path }) => ({
  updateFieldValue: dispatch(updateFieldValue(name, path))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextField)
