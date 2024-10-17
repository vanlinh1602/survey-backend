/* eslint-disable class-methods-use-this */
import { Db } from 'mongodb';
import Service from 'services';

export type User = {
  _id: string;
  uid: string;
  email: string;
  avatar: string;
  displayName: string;
};

export class UsersService extends Service<User> {
  constructor(db: Db) {
    super(db, 'users');
  }

  getUser = async (email: string): Promise<User | null> => {
    return this.collection.findOne({ email });
  };

  updateUser = async (id: string, user: Partial<User>): Promise<boolean> => {
    const updated = await this.collection.updateOne(
      { _id: id },
      {
        $set: user,
      },
      { upsert: true }
    );
    return updated.modifiedCount > 0 || updated.upsertedCount > 0;
  };
}
