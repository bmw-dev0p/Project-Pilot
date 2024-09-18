import sequelize from '../config/connection.js';
import { TaskFactory } from './task.js';

const Task = TaskFactory(sequelize);

export { Task };