import { User } from '../models/userFactory.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { 
      fname: 'Jolly', 
      lname: 'Guru',
      username: 'JollyGuru', 
      email: 'jolly@guru.com', 
      password: 'password',
      img: 'https://randomuser.me/api/portraits/men/99.jpg'
    },
    { 
      fname: 'Sunny', 
      lname: 'Scribe',
      username: 'SunnyScribe', 
      email: 'sunny@scribe.com', 
      password: 'password',
      img: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    { 
      fname: 'Radiant', 
      lname: 'Comet',
      username: 'RadiantComet', 
      email: 'radiant@comet.com', 
      password: 'password',
      img: 'https://randomuser.me/api/portraits/women/76.jpg'
    },
  ], 
  { 
    individualHooks: true 
  }
);
};
