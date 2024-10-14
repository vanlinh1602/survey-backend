import { ResponsesService } from 'services/responses';
import { SurveysService } from 'services/surveys';

export default (): {} => {
  const surveyDB = Databases['xbot-survey'].db('xbot-survey');

  global.Services = {
    surveys: new SurveysService(surveyDB),
    responses: new ResponsesService(surveyDB),
  };

  return {};
};
