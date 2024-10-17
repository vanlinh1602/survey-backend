import { createResponse, queryResponses } from 'controllers/responses';
import express from 'express';
import { verified } from 'utils/validator';

const router = express.Router();

router.post('/create', createResponse);

router.post('/query', verified, queryResponses);

export default router;
