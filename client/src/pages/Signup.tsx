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
    password: '',
    img: '',
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Handle changes in the input fields + image ?
  const handleChange = async (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    //image 
    const files = (e.target as HTMLInputElement).files;
    const data = new FormData();
    data.append('file', files![0]);
    data.append('upload_preset', 'social-media-app');
    const res = await fetch('https://api.cloudinary.com/v1_1/dk1jxwv8p/image/upload', {
      method: 'POST',
      body: data
    });
    const file = await res.json();
    //
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
      img: file.secure_url
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
    <section className='form-container'>
      <form className='form sign-up-form' onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {/* firstname */}
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
        {/* Last name */}
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
        {/* username */}
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
        {/* email */}
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
        {/* password */}
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
        {/* image upload */}
        <div className="form-group">
          <label>Upload a profile picture</label>
          <input
            className="form-input"
            type='file'
            name='img'
            accept='.jpg, .jpeg, .png'
            value={signUpData.password || ''}
            onChange={handleChange}
          />
        </div>
        {/* submit button */}
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
    </section>
  );
};

export default SignUp;
