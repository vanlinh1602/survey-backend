import { auth, signOut } from 'controllers/api';
import express from 'express';

const router = express.Router();

router.post('/auth', auth);

router.post('/signOut', signOut);

export default router;
