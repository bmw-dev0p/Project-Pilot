import { Task } from '../models/taskFactory.js';
import taskSeedData from './taskSeedData.json' assert { type: 'json' };

export const seedTasks = async () => {
  await Task.bulkCreate(
    taskSeedData ,
  { 
    returning: true,
    validate: true,
  }
);
};
