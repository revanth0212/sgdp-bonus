import React from 'react'

import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import TextField from '../Shared/TextField'
import DropDownField from '../Shared/DropDownField'
import PhoneNumberField from '../Shared/PhoneNumberField'

export default ({ toggleBetweenUIs }) => (
  <div style={{ width: '100vw', height: '100vh' }}>
    <div
      style={{
        margin: 'auto',
        width: '65%',
        paddingTop: '2%'
      }}
    >
      <div style={{ width: '100px', margin: 'auto' }}>
        <DefaultButton text="Toggle UI" onClick={toggleBetweenUIs} />
      </div>
      <h3 style={{ paddingBottom: '2%', textAlign: 'center' }}>User Registration Page</h3>
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
  </div>
)
