import React from 'react'
import { Dropdown as OriginalDropdown } from 'office-ui-fabric-react/lib/Dropdown'
import { connect } from 'react-redux'
import { pathOr, values } from 'ramda'

import { updateFieldValue } from '../Actions/Fields'
import FieldConstants from '../Constants/Fields'

const onFieldChangeHandler = (updateFieldValue, onChange) => ({ key: value }) => {
  updateFieldValue(value)
  if (onChange) {
    onChange(value)
  }
}

const Dropdown = ({ configuration, name, path, onChange = () => {}, updateFieldValue, ...otherProps }) => (
  <OriginalDropdown
    {...FieldConstants[name]}
    {...configuration}
    {...otherProps}
    name={name}
    onChanged={onFieldChangeHandler(updateFieldValue, onChange(name))}
    options={values(configuration.options || FieldConstants[name].options || {})}
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
)(Dropdown)
