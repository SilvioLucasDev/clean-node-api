import { type AddSurvey, type AddSurveyParams } from '@/domain/usecases/survey/add-survey'
import { type LoadSurveyById } from '@/domain/usecases/survey/load-survey-by-id'
import { type LoadSurveys } from '@/domain/usecases/survey/load-surveys'
import { type SurveyModel } from '@/domain/models/survey'
import { mockSurveyModel, mockSurveyModels } from '@/domain/test'

export const mockAddSurvey = (): AddSurvey => {
  class AddSurveyStub implements AddSurvey {
    async add (data: AddSurveyParams): Promise<void> {
      await new Promise(resolve => { resolve(null) })
    }
  }
  return new AddSurveyStub()
}

export const mockLoadSurveys = (): LoadSurveys => {
  class LoadSurveysStub implements LoadSurveys {
    async load (): Promise<SurveyModel[]> {
      return await new Promise(resolve => { resolve(mockSurveyModels()) })
    }
  }
  return new LoadSurveysStub()
}

export const mockLoadSurveyById = (): LoadSurveyById => {
  class LoadSurveyByIdStub implements LoadSurveyById {
    async loadById (id: string): Promise<SurveyModel> {
      return await new Promise(resolve => { resolve(mockSurveyModel()) })
    }
  }
  return new LoadSurveyByIdStub()
}
