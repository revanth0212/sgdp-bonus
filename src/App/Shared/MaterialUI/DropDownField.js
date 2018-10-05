import React from 'react'
import OriginalDropdown from 'material-ui/AutoComplete'
import { connect } from 'react-redux'
import { pathOr, values, compose, filter, head, propOr, propEq } from 'ramda'

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
  const dataSource = values(configuration.options || FieldConstants[name].options || {})
  const searchText = compose(
    propOr('', 'text'),
    head,
    filter(propEq('key', finalProps.value))
  )(dataSource)
  return (
    <OriginalDropdown
      {...finalProps}
      fullWidth
      openOnFocus
      name={name}
      placeholder=""
      searchText={searchText}
      filter={OriginalDropdown.noFilter}
      floatingLabelText={finalProps.label}
      errorText={finalProps.required ? 'This field is required' : ''}
      onNewRequest={onFieldChangeHandler(updateFieldValue, onChange(name))}
      dataSource={dataSource}
      dataSourceConfig={{ text: 'key', value: 'text' }}
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
