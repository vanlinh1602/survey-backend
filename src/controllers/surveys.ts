import { Request, Response } from 'express';
import { validParams } from 'utils/validator';

export const createSurvey = async (req: Request, res: Response) => {
  try {
    validParams(req.body, ['data']);
    const { data } = req.body;
    const result = await Services.surveys.createSurvey(data);
    res.send({ id: result });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const getSurvey = async (req: Request, res: Response) => {
  try {
    validParams(req.body, ['id']);
    const { id } = req.body;
    const survey = await Services.surveys.getSurvey(id);
    if (!survey) {
      res.status(404).send('Survey not found');
      return;
    }
    const { _id, ...rest } = survey;
    res.send({ id: _id, ...rest });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const querySurveys = async (req: Request, res: Response) => {
  try {
    const { query } = req.body;
    const surveys = await Services.surveys.querySurveys(query);
    res.send(surveys.map(({ _id, ...rest }) => ({ id: _id, ...rest })));
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const updateSurvey = async (req: Request, res: Response) => {
  try {
    validParams(req.body, ['id', 'data']);
    const { id, data } = req.body;

    const result = await Services.surveys.updateSurvey(id, data);
    res.send({ updated: result });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
