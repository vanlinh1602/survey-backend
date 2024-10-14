/* eslint-disable class-methods-use-this */
import { Db, Filter, ObjectId } from 'mongodb';
import Service from 'services';

export type Response = {
  _id: ObjectId;
  surveyId: string;
  user?: string;
  answers: CustomObject<string | string[] | string[][]>;
};

export class ResponsesService extends Service<Response> {
  constructor(db: Db) {
    super(db, 'responses');
  }

  createResponse = async (response: Response): Promise<string> => {
    const result = await this.collection.insertOne(response);
    if (!result.acknowledged) {
      throw new Error('Failed to create response');
    }
    return result.insertedId.toString();
  };

  getResponse = async (id: string): Promise<Response | null> => {
    return this.collection.findOne({
      _id: new ObjectId(id),
    });
  };

  queryResponses = async (filter: Filter<Response>): Promise<Response[]> => {
    return this.collection.find(filter).toArray();
  };
}
