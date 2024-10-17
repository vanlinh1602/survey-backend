import { ResponsesService } from 'services/responses';
import { SurveysService } from 'services/surveys';
import { UsersService } from 'services/users';

export default (): {} => {
  const surveyDB = Databases.surveys.db('surveys');

  global.Services = {
    surveys: new SurveysService(surveyDB),
    responses: new ResponsesService(surveyDB),
    users: new UsersService(surveyDB),
  };

  return {};
};
