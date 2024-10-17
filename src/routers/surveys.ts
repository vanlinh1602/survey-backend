import { createSurvey, getSurvey, querySurveys, updateSurvey } from 'controllers/surveys';
import express from 'express';
import { verified } from 'utils/validator';

const router = express.Router();

router.post('/create', verified, createSurvey);

router.post('/get', getSurvey);

router.post('/query', verified, querySurveys);

router.post('/update', verified, updateSurvey);

export default router;
