import { makeLoginValidation } from './login-validation-factory'
import { makeDbAuthentication } from '../../../usecases/account/authentication/db-authentication-factory'
import { type Controller } from '../../../../../presentation/protocols'
import { LoginController } from '../../../../../presentation/controllers/login/login/login-controller'
import { makeLogControllerDecorator } from '../../../decorator/log-controller-decorator-factory'

export const makeLoginController = (): Controller => {
  const controller = new LoginController(makeDbAuthentication(), makeLoginValidation())
  return makeLogControllerDecorator(controller)
}
