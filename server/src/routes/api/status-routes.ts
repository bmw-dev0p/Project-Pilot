import express from 'express';
import type { Request, Response } from 'express';
import { Status } from '../../models/statusFactory.js';

const router = express.Router();

// GET /status - Get all statuses
router.get('/', async (_req: Request, res: Response) => {
  console.log('get all statuses');
  
  try {
    const statuses = await Status.findAll();
    res.json(statuses);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// GET /status/:id - Get a status by id
router.get('/:id', async (req: Request, res: Response) => {
  console.log('get status by id');
  
  const { id } = req.params;
  try {
    const status = await Status.findByPk(id);
    if (status) {
      res.json(status);
    } else {
      res.status(404).json({ message: 'Status not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// POST /status/ - Post a new status
router.post('/', async (req: Request, res: Response) => {
    console.log('post new status');
    try {
        const { title } = req.body;
        const newStatus = await Status.create({ title });
        console.log(newStatus);
        res.json({ newStatus })
    }
    catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

// PUT /status/:id - Update a status by id
router.put('/:id', async (req: Request, res: Response) => {
  console.log('update status by id');

  const { id } = req.params;
  const { title } = req.body;
  try {
    const status = await Status.findByPk(id);
    if (status) {
        status.title = title;
      await status.save();
      res.json(status);
    } else {
      res.status(404).json({ message: 'Status not found' });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /status/:id - Delete a status by id
router.delete('/:id', async (req: Request, res: Response) => {
  console.log('delete status by id');
  
  const { id } = req.params;
  try {
    const status = await Status.findByPk(id);
    if (status) {
      await status.destroy();
      res.json({ message: 'Status deleted' });
    } else {
      res.status(404).json({ message: 'Status not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export { router as statusRouter };
