import React from 'react'

import OUIButton from '../Shared/OfficeUI/Button'
import OUITextField from '../Shared/OfficeUI/TextField'
import OUIDropDownField from '../Shared/OfficeUI/DropDownField'
import OUIPhoneNumberField from '../Shared/OfficeUI/PhoneNumberField'

import MUIButton from '../Shared/MaterialUI/Button'
import MUITextField from '../Shared/MaterialUI/TextField'
import MUIDropDownField from '../Shared/MaterialUI/DropDownField'
import MUIPhoneNumberField from '../Shared/MaterialUI/PhoneNumberField'

export default ({ toggleBetweenUIs, renderMUIComponents, toggleBetweenSharedComponents }) => {
  const TextField = renderMUIComponents ? MUITextField : OUITextField
  const DropDownField = renderMUIComponents ? MUIDropDownField : OUIDropDownField
  const PhoneNumberField = renderMUIComponents ? MUIPhoneNumberField : OUIPhoneNumberField
  const Button = renderMUIComponents ? MUIButton : OUIButton
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div
        style={{
          margin: 'auto',
          width: '65%',
          paddingTop: '2%'
        }}
      >
        <div className="row" style={{ width: '300px', margin: 'auto' }}>
          <div className="col-6">
            <Button text="Toggle UI" onClick={toggleBetweenUIs} />
          </div>
          <div className="col-6">
            <Button text="Toggle Components" onClick={toggleBetweenSharedComponents} />
          </div>
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
}
