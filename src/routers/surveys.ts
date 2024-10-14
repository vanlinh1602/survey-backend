import { createSurvey, getSurvey, querySurveys, updateSurvey } from 'controllers/surveys';
import express from 'express';

const router = express.Router();

router.post('/create', createSurvey);

router.post('/get', getSurvey);

router.post('/query', querySurveys);

router.post('/update', updateSurvey);

export default router;
