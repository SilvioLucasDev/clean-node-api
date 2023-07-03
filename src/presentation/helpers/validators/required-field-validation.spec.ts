
import { MissingParamError } from '../../errors'
import { RequiredFieldValidation } from './required-field-validation'

describe('Required Field Validation', () => {
  test('Should return an MissingParamError if validation fails', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({
      email: 'any_email@email.com'
    })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('Should not return if validation succeeds', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({
      field: 'any_email@email.com'
    })
    expect(error).toBeFalsy()
  })
})
