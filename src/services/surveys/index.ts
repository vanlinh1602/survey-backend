/* eslint-disable class-methods-use-this */
import { Db } from 'mongodb';
import Service from 'services';

export type Survey = {
  _id: string;
  points: number;
};

export class SurveysService extends Service<Survey> {
  constructor(db: Db) {
    super(db, 'surveys');
  }

  createSurvey = async (survey: Survey): Promise<void> => {
    await this.collection.insertOne(survey);
  };

  getSurvey = async (id: string): Promise<Survey | null> => {
    return this.collection.findOne({ _id: id });
  };
}
