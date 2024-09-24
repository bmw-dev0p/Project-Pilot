import { Link } from 'react-router-dom';
import logo from '../assets/pilot-logo.png';
import '../index.css';
import { UserLogin } from '../interfaces/UserLogin';
import { useEffect, useState } from 'react';
import auth from '../utils/auth';

const Home = () => {
    const [user, setUser] = useState<UserLogin | null>(null); // Change type here

    useEffect(() => {
        const fetchUserProperties = async () => {
            const userData = await auth.getUserProperties();
            setUser(userData); // This should now match the type
        };

        fetchUserProperties();
    }, []);
    return (

        <div className='container'>
            <img className='pilot-logo' src={logo} alt='pilot-logo' />
            <h1 className='header'>
                Project Pilot
            </h1>
            <h2 className='sub-header'>
                Task Management, on Autopilot
            </h2>
{!user &&
            <div className='button-container'>
                <Link to="/login">
                    <button className='btn-home login-btn'>Login</button>
                </Link>
                <Link to="/signup">
                    <button className='btn-home signup-btn'>Sign Up</button>
                </Link>
            </div>}
        </div>
    );
};

export default Home;
