import { Request, Response } from 'express';
import { validParams } from 'utils/validator';

export const createResponse = async (req: Request, res: Response) => {
  try {
    validParams(req.body, ['data']);
    const { data } = req.body;
    const result = await Services.responses.createResponse(data);
    res.send({ id: result });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const queryResponses = async (req: Request, res: Response) => {
  try {
    const { query } = req.body;
    const responses = await Services.responses.queryResponses(query);
    res.send(responses.map(({ _id, ...rest }) => ({ id: _id, ...rest })));
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
