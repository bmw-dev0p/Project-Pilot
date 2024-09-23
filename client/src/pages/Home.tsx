import { Link } from 'react-router-dom';
import logo from '../assets/pilot-logo.png';
import '../index.css';

const Home = () => {
    return (
        <>
            <div>
                <div className='container'>
                    <img className='pilot-logo' src={logo} alt='pilot-logo' />
                    <h1 className='header'>
                        Project Pilot
                    </h1>
                    <h2 className='sub-header'>
                        Task Management, on Autopilot
                    </h2>
                    
                    <div className='button-container'>
                        <Link to="/login">
                            <button className='btn-home login-btn'>Login</button>
                        </Link>
                        <Link to="/signup">
                            <button className='btn-home signup-btn'>Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
