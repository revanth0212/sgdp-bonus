import fieldChangesCalculator from 'field-change-effects-calculator'
import RULES from './FieldRules'

const calculator = fieldChangesCalculator(RULES)

export const updateFieldValue = (name, path) => (dispatch, getState) => value => {
  dispatch({
    type: 'UPDATE_FIELD_VALUE',
    changes: calculator(getState())(name, path, value)
  })
}
