import { Router } from 'express';
import authRoutes from './auth-routes.js';
import { authenticateToken } from '../../config/authToken.js';
import { userRouter } from './user-routes.js';
import { taskRouter } from './task-routes.js';
import { statusRouter } from './status-routes.js';

const router = Router();

const apiRoutes = router.use('users', userRouter);

router.use('/auth', authRoutes);
router.use('/api', authenticateToken, apiRoutes);
router.use('/users', userRouter);
router.use('/tasks', taskRouter);
router.use('/status', statusRouter);

export default router;
