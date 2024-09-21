import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import Auth from '../utils/auth';
import { signUp } from "../api/authAPI";
import { UserLogin } from "../interfaces/UserLogin";
// @ts-ignore
import CloudinaryUploadWidget from '../components/Img-Upload';

const SignUp = () => {
  const [signUpData, setSignUpData] = useState<UserLogin>({
    fname: '',
    lname: '',
    username: '',
    email: '',
    password: '',
    img: '',  // Holds the image URL
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value
    });
  };

  const handleValidate = () => {
    const { fname, lname, username, email, password } = signUpData;
    if (!fname || !lname || !username || !email || !password) {
      setErrorMessage('Please fill out all fields before submitting');
      return false;
    }
    setErrorMessage(null);
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const isValid = handleValidate();
    if (!isValid) {
      return;
    }

    try {
      const data = await signUp(signUpData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to sign up', err);
    }
  };

  const setImageUrl = (url: string) => {
    setSignUpData({ ...signUpData, img: url });
  };

  useEffect(() => {
    console.log('Current signUpData state:', signUpData);
  }, [signUpData]);

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
          <CloudinaryUploadWidget setImageUrl={setImageUrl} />
        </div>
        {/* submit button */}
        <div className="form-group">
          <button className="btn btn-primary" type='submit'>Sign Up</button>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </section>
  );
};

export default SignUp;