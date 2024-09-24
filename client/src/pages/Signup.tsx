import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import Auth from '../utils/auth';
import { signUp } from "../api/authAPI";
import { UserLogin } from "../interfaces/UserLogin";
import '../index.css';
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

  const [imageUrl, setImageUrl] = useState<string | null>(null); // New state for image
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // For image upload success message

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value
    });
  };

  const handleValidate = () => {
    const { fname, lname, username, email, password } = signUpData;
    if (!fname || !lname || !username || !email || !password || !imageUrl) {
      setErrorMessage('Please fill out all fields, including the profile picture, before submitting');
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
      const data = await signUp({ ...signUpData, img: imageUrl || '' }); // Merge image URL before submitting
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to sign up', err);
    }
  };

  const handleImageUpload = (url: string) => {
    setImageUrl(url);
    setSuccessMessage('Image upload successful!'); // Display success message
  };

  useEffect(() => {
    console.log('Current signUpData state:', signUpData);
  }, [signUpData]);

  return (
    <div className="page-container">
    <section className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
        <h1 className="form-title">Sign Up</h1>
        {/* firstname */}
        <div className="form-group">
          <label className="form-label">First Name:</label>
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
          <label className="form-label">Last Name:</label>
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
          <label className="form-label">Username:</label>
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
          <label className="form-label">Email:</label>
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
          <label className="form-label">Password:</label>
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
          <label className="form-label-pic">Upload a profile picture</label>
          <div className="page-container">
          <CloudinaryUploadWidget setImageUrl={handleImageUpload} />
          </div>
          {successMessage && <p className="success-text">{successMessage}</p>}
        
        </div>
        {/* submit button */}
        <div className="form-group">
          <div className="page-container">
            <button className="btn-home" type='submit'>Sign Up</button>
          </div>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </section>
    </div>
  );
};

export default SignUp;
