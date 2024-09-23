import { Router, Request, Response } from 'express';
import { User } from '../../models/user.js';  // Import the User model
import jwt from 'jsonwebtoken';  // Import the JSON Web Token library
import bcrypt from 'bcrypt';  // Import the bcrypt library for password hashing


// Login function to authenticate a user
export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;  // Extract username and password from request body

  // Find the user in the database by username
  const user = await User.findOne({
    where: { username },
  });

  // If user is not found, send an authentication failed response
  if (!user) {
    return res.status(401).json({ message: 'User not found' }); // I know this isn't best security practice, but helps debugging
  }

  // Compare the provided password with the stored hashed password
  const passwordIsValid = await bcrypt.compare(password, user.password);
  // If password is invalid, send an authentication failed response
  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Password incorrect' });
  }

  // Get the secret key from environment variables
  const secretKey = process.env.JWT_SECRET_KEY || '';

  // Generate a JWT token for the authenticated user, including user properties
  const token = jwt.sign({
    username: user.username,
    fname: user.fname,
    lname: user.lname,
    email: user.email,
    img: user.img,
  }, secretKey, { expiresIn: '1h' });

  console.log('User authenticated:', username); // Check
  return res.json({ token });  // Send the token as a JSON response
};

// Sign-up function to create a new user
export const signUp = async (req: Request, res: Response) => {
  try {
    const { fname, lname, username, email, password, img } = req.body;
    const newUser = await User.create({ fname, lname, username, email, password, img });

    console.log(newUser);
    
    // Get the secret key from environment variables
    const secretKey = process.env.JWT_SECRET_KEY || '';

    // Generate a JWT token for the authenticated user, including user properties
    const token = jwt.sign({
      username: newUser.username,
      fname: newUser.fname,
      lname: newUser.lname,
      email: newUser.email,
      img: newUser.img,
    }, secretKey, { expiresIn: '1h' });

    res.json({ token });  // Send the token as a JSON response
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}


// Create a new router instance
const router = Router();

// POST /login - Login a user
router.post('/login', login);  // Define the login route

// POST /users - Create a new user
router.post('/signup', signUp);

export default router;  // Export the router instance
