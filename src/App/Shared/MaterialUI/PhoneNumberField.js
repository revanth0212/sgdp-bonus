import React from 'react'
import TextField from './TextField'

export default props => (
  <div className="row">
    <div className="col-3" style={{ marginLeft: '0px' }}>
      <TextField {...props.phoneNumberCodeProps} />
    </div>
    <div className="col-9">
      <TextField {...props.phoneNumberProps} />
    </div>
  </div>
)
