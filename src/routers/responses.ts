import { createResponse, queryResponses } from 'controllers/responses';
import express from 'express';

const router = express.Router();

router.post('/create', createResponse);

router.post('/query', queryResponses);

export default router;
