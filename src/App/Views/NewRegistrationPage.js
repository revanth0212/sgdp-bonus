import React from 'react'

import badgeSVG from './id-badge-solid.svg'

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
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '0.3', float: 'left' }}>
            <img
              src={badgeSVG}
              alt="Registration Icon"
              style={{ padding: '2% 13%', height: '250px', width: '250px' }}
            />
          </div>
          <div style={{ flex: '0.7', float: 'right', height: 'fit-content' }}>
            <div className="row">
              <div className="col-5">
                <TextField name="firstName" path={['fields', 'firstName']} />
              </div>
              <div className="col-2">
                <TextField name="middleName" path={['fields', 'middleName']} />
              </div>
              <div className="col-5">
                <TextField name="lastName" path={['fields', 'lastName']} />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <TextField name="address" path={['fields', 'address']} />
              </div>
              <div className="col-3">
                <TextField name="zipCode" path={['fields', 'zipCode']} />
              </div>
              <div className="col-3">
                <TextField name="city" path={['fields', 'city']} />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <DropDownField name="state" path={['fields', 'state']} />
              </div>
              <div className="col-3">
                <DropDownField name="country" path={['fields', 'country']} />
              </div>
              <div className="col-6" style={{ marginTop: '0px' }}>
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
    </div>
  )
}
