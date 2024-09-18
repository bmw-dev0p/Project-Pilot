import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import Auth from '../utils/auth';
import { signUp } from "../api/authAPI";
import { UserLogin } from "../interfaces/UserLogin";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState<UserLogin>({
    fname: '',
    lname: '',
    username: '',
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Handle changes in the input fields
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value
    });
  };

  // Validate form inputs
  const handleValidate = () => {
    const { fname, lname, username, email, password } = signUpData;
    if (!fname || !lname || !username || !email || !password) {
      setErrorMessage('Please fill out all fields before submitting');
      return false;  // Form is invalid
    }
    setErrorMessage(null);  // Clear any previous error
    return true;  // Form is valid
  };

  // Handle form submission for sign up
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate inputs before submitting
    const isValid = handleValidate();
    if (!isValid) {
      return;  // Stop submission if validation fails
    }

    try {
      const data = await signUp(signUpData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to sign up', err);
    }
  };

  // check the current state of the signUpData object
  useEffect(() => {
    console.log('Current signUpData state:', signUpData);
  }, 
  [signUpData]
);

  return (
    <div className='form-container'>
      <form className='form sign-up-form' onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {/* First name input field */}
        <div className="form-group">
          <label>First Name:</label>
          <input
            className="form-input"
            type='text'
            name='fname'
            value={signUpData.fname || ''}
            onChange={handleChange}
          />
        </div>
        {/* Last name input field */}
        <div className="form-group">
          <label>Last Name:</label>
          <input
            className="form-input"
            type='text'
            name='lname'
            value={signUpData.lname || ''}
            onChange={handleChange}
          />
        </div>
        {/* Username input field */}
        <div className="form-group">
          <label>Username:</label>
          <input
            className="form-input"
            type='text'
            name='username'
            value={signUpData.username || ''}
            onChange={handleChange}
          />
        </div>
        {/* Email input field */}
        <div className="form-group">
          <label>Email:</label>
          <input
            className="form-input"
            type='email'
            name='email'
            value={signUpData.email || ''}
            onChange={handleChange}
          />
        </div>
        {/* Password input field */}
        <div className="form-group">
          <label>Password:</label>
          <input
            className="form-input"
            type='password'
            name='password'
            value={signUpData.password || ''}
            onChange={handleChange}
          />
        </div>
        {/* Submit button for the sign up form */}
        <div className="form-group">
          <button className="btn btn-primary" type='submit'>Sign Up</button>
        </div>
      </form>
      {/* conditional error message */}
      {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
    </div>
  );
};

export default SignUp;
