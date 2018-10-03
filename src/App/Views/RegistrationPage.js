import React from 'react'

import TextField from '../Shared/TextField'
import DropDownField from '../Shared/DropDownField'
import PhoneNumberField from '../Shared/PhoneNumberField'

export default () => (
  <div>
    <h3 style={{ paddingBottom: '2%', textAlign: 'center' }}>Registration Page</h3>
    <div className="row">
      <div className="row">
        <div className="col-4">
          <TextField name="firstName" path={['fields', 'firstName']} />
        </div>
        <div className="col-4">
          <TextField name="middleName" path={['fields', 'middleName']} />
        </div>
        <div className="col-4">
          <TextField name="lastName" path={['fields', 'lastName']} />
        </div>
      </div>
      <div className="row">
        <div>
          <div className="col-10">
            <TextField name="address" path={['fields', 'address']} />
          </div>
          <div className="col-2">
            <TextField name="zipCode" path={['fields', 'zipCode']} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <TextField name="city" path={['fields', 'city']} />
        </div>
        <div className="col-4">
          <DropDownField name="state" path={['fields', 'state']} />
        </div>
        <div className="col-4">
          <DropDownField name="country" path={['fields', 'country']} />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <PhoneNumberField
            phoneNumberProps={{
              name: 'phoneNumber',
              path: ['fields', 'phoneNumber']
            }}
            phoneNumberCodeProps={{
              name: 'phoneNumberCode',
              path: ['fields', 'phoneNumberCode']
            }}
          />
        </div>
      </div>
    </div>
  </div>
)
