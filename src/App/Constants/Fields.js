import { CountryDropDownOptions, getStateDropDownOptions } from './DropdownOptions'

export const getCountryPhoneCodeFromCountryCode = country =>
  ({
    USA: '+1',
    IN: '+91'
  }[country] || '')

export default {
  firstName: {
    label: 'First Name',
    placeholder: 'First Name'
  },
  middleName: {
    label: 'Middle Name',
    placeholder: 'Middle Name'
  },
  lastName: {
    label: 'Last Name',
    placeholder: 'Last Name'
  },
  address: {
    label: 'Address',
    placeholder: 'Address'
  },
  zipCode: {
    label: 'Zip Code',
    placeholder: 'Zip Code'
  },
  city: {
    label: 'City',
    placeholder: 'City'
  },
  state: {
    label: 'State',
    placeHolder: 'Select State',
    options: getStateDropDownOptions()
  },
  country: {
    label: 'Country',
    placeHolder: 'Select Country',
    options: CountryDropDownOptions
  },
  phoneNumber: {
    label: 'Phone Number',
    placeholder: 'Phone Number'
  },
  phoneNumberCode: {
    label: 'Country Code',
    placeholder: 'Code'
  }
}
