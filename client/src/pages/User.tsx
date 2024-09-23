import { useEffect, useState } from 'react';
import auth from '../utils/auth';
import  { UserLogin } from "../interfaces/UserLogin"; // Adjust import if necessary

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
            <div>
                <h1>
                    Welcome, {user.fname} {user.lname}
                </h1>
                {user.img && <img src={user.img} alt="Profile" className="user-pic" />}
                <div>
                    <h3>User Details:</h3>
                    <p>First Name: {user.fname}</p>
                    <p>Last Name: {user.lname}</p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    {/* Add more properties as needed */}
                </div>
            </div>
        );
    }
};

export default User;
