import { type Router } from 'express'
import { makeSignUpController } from '../factories/signup/signup'
import { adaptRoute } from '../adapter/express-route-adapter'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
}
