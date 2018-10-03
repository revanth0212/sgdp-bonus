export const CountryDropDownOptions = {
  USA: {
    key: 'USA',
    text: 'United States of America'
  },
  IN: {
    key: 'IN',
    text: 'India'
  }
}

export const getStateDropDownOptions = (country = '') =>
  ({
    USA: {
      TX: {
        key: 'TX',
        text: 'Texas'
      },
      CA: {
        key: 'CA',
        text: 'California'
      }
    },
    IN: {
      MH: {
        key: 'MH',
        text: 'Maharastra'
      },
      AP: {
        key: 'AP',
        text: 'Andhra Pradesh'
      }
    }
  }[country] || [])
