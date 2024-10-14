/* eslint-disable class-methods-use-this */
import { Db } from 'mongodb';
import Service from 'services';

export type Response = {
  _id: string;
  points: number;
};

export class ResponsesService extends Service<Response> {
  constructor(db: Db) {
    super(db, 'responses');
  }

  createSurvey = async (survey: Response): Promise<void> => {
    await this.collection.insertOne(survey);
  };

  getSurvey = async (id: string): Promise<Response | null> => {
    return this.collection.findOne({ _id: id });
  };
}
