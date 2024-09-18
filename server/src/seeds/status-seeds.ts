import { Status } from '../models/statusFactory.js';
import statusSeedData from './statusSeedData.json' assert { type: 'json' };

export const seedStatus = async () => {
  await Status.bulkCreate(
    statusSeedData ,
  { 
    validate: true,
  }
);
};