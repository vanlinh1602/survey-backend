/* eslint-disable class-methods-use-this */
import { Db, Filter } from 'mongodb';
import Service from 'services';

type Question = {
  id: string;
  type: 'input' | 'radio' | 'checkbox' | 'questionGroup';
  text: string;
  fields?: string[];
};

export type Survey = {
  _id: string;
  logo?: string;
  title: string;
  description: string;
  questions: Question[];
};

export class SurveysService extends Service<Survey> {
  constructor(db: Db) {
    super(db, 'surveys');
  }

  createSurvey = async (survey: Survey): Promise<string> => {
    const result = await this.collection.insertOne(survey);
    if (!result.acknowledged) {
      throw new Error('Failed to create survey');
    }
    return result.insertedId.toString();
  };

  getSurvey = async (id: string): Promise<Survey | null> => {
    return this.collection.findOne({ _id: id });
  };

  querySurveys = async (query?: Filter<Survey>): Promise<Survey[]> => {
    if (query) {
      return this.collection.find(query).toArray();
    }
    return this.collection.find().toArray();
  };

  updateSurvey = async (id: string, survey: Partial<Survey>): Promise<boolean> => {
    const updated = await this.collection.updateOne(
      { _id: id },
      {
        $set: survey,
      },
      { upsert: true }
    );
    return updated.modifiedCount > 0 || updated.upsertedCount > 0;
  };
}
