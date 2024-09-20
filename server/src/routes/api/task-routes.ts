import express from 'express';
import type { Request, Response } from 'express';
import { Task } from '../../models/taskFactory.js';

const router = express.Router();

// GET /tasks - Get all tasks
router.get('/', async (_req: Request, res: Response) => {
    console.log('get all tasks');

    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// GET /tasks/:id - Get a task by id
router.get('/:id', async (req: Request, res: Response) => {
    console.log('get task by id');

    const { id } = req.params;
    try {
        const task = await Task.findByPk(id);
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// POST /tasks/ - Post a new task
router.post('/', async (req: Request, res: Response) => {
    console.log('post new task');
    try {
        const { name, description, status_id, user_id } = req.body;
        const newTask = await Task.create({ name, description, status_id, user_id });
        console.log(newTask);
        res.json({ newTask })
    }
    catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

// PUT /tasks/:id - Update a task by id
router.put('/:id', async (req: Request, res: Response) => {
    console.log('update task by id');

    const { id } = req.params;
    const { name, description, status_id, user_id } = req.body;
    try {
        const task = await Task.findByPk(id);
        if (task) {
            task.name = name;
            task.description = description;
            task.status_id = status_id;
            task.user_id = user_id;
            await task.save();
            res.json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE /tasks/:id - Delete a task by id
router.delete('/:id', async (req: Request, res: Response) => {
    console.log('delete task by id');

    const { id } = req.params;
    try {
        const task = await Task.findByPk(id);
        if (task) {
            await task.destroy();
            res.json({ message: 'Task deleted' });
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export { router as taskRouter };
