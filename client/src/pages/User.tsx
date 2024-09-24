import { useEffect, useState } from 'react';
import auth from '../utils/auth';
import { UserLogin } from "../interfaces/UserLogin"; // Adjust import if necessary

const User = () => {
    const [user, setUser] = useState<UserLogin | null>(null); // Change type here

    useEffect(() => {
        const fetchUserProperties = async () => {
            const userData = await auth.getUserProperties();
            setUser(userData); // This should now match the type
        };

        fetchUserProperties();
    }, []);

    if (!user) {
        return <h1>User not found</h1>;
    } else {
        return (
            <div className="user-page-container">
                <h1 className="user-welcome">
                    Welcome, {user.fname} {user.lname}
                </h1>
                {user.img && <img src={user.img} alt="Profile" className="user-pic" />}
                <div className="user-details">
                    <h3>User Details:</h3>
                    <p><span className='bold'>First Name: </span>{user.fname}</p>
                    <p><span className='bold'>Last Name: </span>{user.lname}</p>
                    <p><span className='bold'>Username: </span>{user.username}</p>
                    <p><span className='bold'>Email: </span>{user.email}</p>
                </div>
                <div className='page-container2'>
                <button className="btn-home" onClick={() => auth.logout()}>Logout</button>
                <button className="btn-home">Edit Profile</button>
            </div>
            </div>

        );
    }
};

export default User;
