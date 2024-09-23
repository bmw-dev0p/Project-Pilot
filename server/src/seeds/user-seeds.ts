import { User } from '../models/userFactory.js'; // Import your Sequelize User model

// Define the structure of the data returned by randomuser.me API
interface RandomUserAPI {
    name: { first: string; last: string };
    login: { username: string };
    email: string;
    picture: { large: string };
}

// Define the attributes interface for the User model
export interface UserAttributes {
  fname: string;
  lname: string;
  username: string;
  email: string;
  password: string;
  img: string;
}

export const seedUsers = async () => {
  // Fetch random user data from the randomuser.me API
  const fetchRandomUsers = async (numUsers = 5): Promise<RandomUserAPI[]> => {
    const response = await fetch(`https://randomuser.me/api/?results=${numUsers}`);
    const data = await response.json();
    return data.results;
  };

  const hardcodedUsers: UserAttributes[] = [
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
    }
  ];

  const randomUsers = await fetchRandomUsers();
  const apiUsers: UserAttributes[] = randomUsers.map((user: RandomUserAPI) => ({
    fname: user.name.first,
    lname: user.name.last,
    username: user.login.username,
    email: user.email,
    password: 'password',
    img: user.picture.large
  }));

  const usersToSeed = [...hardcodedUsers, ...apiUsers];
  await User.bulkCreate(usersToSeed, { individualHooks: true });

  return usersToSeed; // Return the users that were seeded for better tracking
};
