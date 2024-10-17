/* eslint-disable vars-on-top, no-var */
import { MongoClient } from 'mongodb';
import type { ResponsesService } from 'services/responses';
import type { SurveysService } from 'services/surveys';
import type { UsersService } from 'services/users';
import type { Logger as LoggerType } from 'winston';

declare global {
  type CustomObject<Type> = {
    [key: string]: Type;
  };
  var ProductID: string;
  var Databases: CustomObject<MongoClient>;
  var Logger: LoggerType;
  var Services: {
    surveys: SurveysService;
    responses: ResponsesService;
    users: UsersService;
  };
}

declare module 'express-session' {
  interface SessionData {
    user?: any;
  }
}
