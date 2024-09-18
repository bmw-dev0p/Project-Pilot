import { seedUsers } from './user-seeds.js';
import { seedTasks } from './task-seeds.js';
import { seedStatus } from './status-seeds.js'
import sequelize from '../config/connection.js';

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedStatus();
    console.log('\n----- STATUS SEEDED -----\n');

    await seedTasks();
    console.log('\n----- TASKS SEEDED -----\n');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
