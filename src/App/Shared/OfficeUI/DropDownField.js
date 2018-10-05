import React from 'react'
import { Dropdown as OriginalDropdown } from 'office-ui-fabric-react/lib/Dropdown'
import { connect } from 'react-redux'
import { pathOr, values } from 'ramda'

import { updateFieldValue } from '../../Actions/Fields'
import FieldConstants from '../../Constants/Fields'

const onFieldChangeHandler = (updateFieldValue, onChange) => ({ key: value }) => {
  updateFieldValue(value)
  if (onChange) {
    onChange(value)
  }
}

const Dropdown = ({ configuration, name, path, onChange = () => {}, updateFieldValue, ...otherProps }) => {
  const finalProps = {
    ...FieldConstants[name],
    ...configuration,
    ...otherProps
  }
  const options = values(configuration.options || FieldConstants[name].options || {})
  return (
    <OriginalDropdown
      {...finalProps}
      name={name}
      selectedKey={finalProps.value}
      onChanged={onFieldChangeHandler(updateFieldValue, onChange(name))}
      options={options}
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
)(Dropdown)
