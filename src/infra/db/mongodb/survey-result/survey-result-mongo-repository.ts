import { MongoHelper } from '../helpers/mongo-helper'
import { type SaveSurveyResultModel, type SurveyResultModel, type SaveSurveyResultRepository } from '@/data/usecases/save-survey-result/db-save-survey-result-protocols'

export class SurveyResultMongoRepository implements SaveSurveyResultRepository {
  async save (data: SaveSurveyResultModel): Promise<SurveyResultModel> {
    const surveyResultCollection = await MongoHelper.getCollection('surveyResults')
    const surveyResult = await surveyResultCollection.findOneAndUpdate({
      surveyId: data.surveyId,
      accountId: data.accountId
    }, {
      $set: {
        answer: data.answer,
        date: data.date
      }
    }, {
      upsert: true,
      returnDocument: 'after'
    })

    return surveyResult.value && MongoHelper.map(surveyResult.value)
  }
}
