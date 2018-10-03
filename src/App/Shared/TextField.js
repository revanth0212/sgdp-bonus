import React from 'react'
import { TextField as OriginalTextField } from 'office-ui-fabric-react/lib/TextField'
import { connect } from 'react-redux'
import { pathOr } from 'ramda'

import { updateFieldValue } from '../Actions/Fields'
import FieldConstants from '../Constants/Fields'

const onFieldChangeHandler = (updateFieldValue, onChange) => value => {
  updateFieldValue(value)
  if (onChange) {
    onChange(value)
  }
}

const TextField = ({ configuration, name, path, onChange = () => {}, updateFieldValue, ...otherProps }) => (
  <OriginalTextField
    {...FieldConstants[name]}
    {...configuration}
    {...otherProps}
    name={name}
    onChanged={onFieldChangeHandler(updateFieldValue, onChange(name))}
  />
)

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
