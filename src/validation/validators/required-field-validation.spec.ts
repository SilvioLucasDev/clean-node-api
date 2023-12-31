
import { RequiredFieldValidation } from './required-field-validation'
import { MissingParamError } from '@/presentation/errors'

const makeSut = (): RequiredFieldValidation => {
  return new RequiredFieldValidation('field')
}

describe('Required Field Validation', () => {
  test('Should return an MissingParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({
      email: 'any_email@email.com'
    })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('Should not return if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({
      field: 'any_email@email.com'
    })
    expect(error).toBeFalsy()
  })
})
