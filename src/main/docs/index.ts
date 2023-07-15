import { loginPath, surveyPath, signUpPath } from './paths'
import { badRequest, serverError, unauthorized, notFound, forbidden } from './components'
import {
  accountSchema,
  loginParamsSchema,
  errorSchema,
  surveysSchema,
  surveySchema,
  surveyAnswerSchema,
  apiKeyAuthSchema,
  signUpParamsSchema
} from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node Api',
    description: 'Api do curso do Mando para realizar enquetes entre programadores',
    version: '1.0.0'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }, {
    name: 'Enquete'
  }],
  paths: {
    '/login': loginPath,
    '/signup': signUpPath,
    '/surveys': surveyPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema,
    surveys: surveysSchema,
    survey: surveySchema,
    surveyAnswer: surveyAnswerSchema,
    signUpParams: signUpParamsSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    serverError,
    unauthorized,
    notFound,
    forbidden
  }
}
