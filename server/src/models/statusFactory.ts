import sequelize from '../config/connection.js';
import { StatusFactory } from './status.js';

const Status = StatusFactory(sequelize);

export { Status };