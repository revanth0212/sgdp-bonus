import { isEmpty } from 'ramda'
import { getStateDropDownOptions } from '../Constants/DropdownOptions'
import { getCountryPhoneCodeFromCountryCode } from '../Constants/Fields'

export default {
  address: [
    {
      name: 'zipCode',
      path: ['fields', 'zipCode'],
      props: newAddress => ({
        required: !isEmpty(newAddress),
        disabled: isEmpty(newAddress)
      })
    },
    {
      name: 'city',
      path: ['fields', 'city'],
      props: newAddress => ({
        required: !isEmpty(newAddress),
        disabled: isEmpty(newAddress)
      })
    },
    {
      name: 'state',
      path: ['fields', 'state'],
      props: newAddress => ({
        required: !isEmpty(newAddress)
      })
    },
    {
      name: 'country',
      path: ['fields', 'country'],
      props: newAddress => ({
        required: !isEmpty(newAddress),
        disabled: isEmpty(newAddress)
      })
    }
  ],
  country: [
    {
      name: 'state',
      path: ['fields', 'state'],
      props: newCountry => ({
        disabled: isEmpty(newCountry),
        options: getStateDropDownOptions(newCountry)
      })
    },
    {
      name: 'phoneNumberCode',
      path: ['fields', 'phoneNumberCode'],
      props: newCountry => ({
        value: getCountryPhoneCodeFromCountryCode(newCountry)
      })
    }
  ]
}
