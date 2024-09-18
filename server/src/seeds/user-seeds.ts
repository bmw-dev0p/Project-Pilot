import { User } from '../models/userFactory.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { 
      fname: 'Jolly', 
      lname: 'Guru',
      username: 'JollyGuru', 
      email: 'jolly@guru.com', 
      password: 'password' 
    },
    { 
      fname: 'Sunny', 
      lname: 'Scribe',
      username: 'SunnyScribe', 
      email: 'sunny@scribe.com', 
      password: 'password' 
    },
    { 
      fname: 'Radiant', 
      lname: 'Comet',
      username: 'RadiantComet', 
      email: 'radiant@comet.com', 
      password: 'password' 
    },
  ], 
  { 
    individualHooks: true 
  }
);
};
