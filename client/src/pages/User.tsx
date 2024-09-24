import { useEffect, useState } from 'react';
import auth from '../utils/auth';
import { UserLogin } from "../interfaces/UserLogin"; // Adjust import if necessary
import { retrieveUsers, deleteUser } from '../api/userAPI';
import { UserData } from '../interfaces/UserData';
import { Link } from 'react-router-dom';


const User = () => {
    const [user, setUser] = useState<UserLogin | null>(null);  // User data
    const [isEditing, setIsEditing] = useState(false);  // Toggle for editing mode
    const [editUser, setEditUser] = useState<UserLogin | null>(null);  // State for editable user data

    useEffect(() => {
        const fetchUserProperties = async () => {
            const userData = await auth.getUserProperties();
            setUser(userData);
            setEditUser(userData);  // Initialize the editable user state with the fetched data
        };

        fetchUserProperties();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditUser(prevUser => prevUser ? { ...prevUser, [name]: value } : null);
    };

    const handleDelete = async () => {
        if (editUser) {
            const allUsers = await retrieveUsers();
            const filteredUser: UserData[] = allUsers.filter((user: UserData) => user.username === editUser.username);
            if (filteredUser[0].id !== undefined) {
                await auth.updateUserProperties(filteredUser[0].id, { ...filteredUser[0], password: editUser.password });
            } else {
                console.error("User ID is undefined");
            }
    }
}

    const handleSave = async () => {
        if (editUser) {
            // Logic to save the updated user information
            const allUsers = await retrieveUsers();
            console.log(allUsers);
            const filteredUser: UserData[] = allUsers.filter((user: UserData) => user.username === editUser.username);
            console.log(filteredUser);
            
            if (filteredUser[0].id !== undefined) {
                await deleteUser(filteredUser[0].id);
            } else {
                console.error("User ID is undefined");
            }
           <Link to="/login"></Link>
        }
    };

    if (!user) {
        return <h1>User not found</h1>;
    }

    return (
        <div className="user-page-container">
            <h1 className="user-welcome">
                Welcome, {user.fname} {user.lname}
            </h1>
            {user.img && <img src={user.img} alt="Profile" className="user-pic" />}
            
            <div className="user-details">
                <h3>User Details:</h3>
                {!isEditing ? (
                    <>
                        <p><span className='bold'>First Name: </span>{user.fname}</p>
                        <p><span className='bold'>Last Name: </span>{user.lname}</p>
                        <p><span className='bold'>Username: </span>{user.username}</p>
                        <p><span className='bold'>Email: </span>{user.email}</p>
                    </>
                ) : (
                    <>
                        <label>
                            First Name: 
                            <input type="text" name="fname" value={editUser?.fname || ''} onChange={handleInputChange} />
                        </label>
                        <label>
                            Last Name: 
                            <input type="text" name="lname" value={editUser?.lname || ''} onChange={handleInputChange} />
                        </label>
                        <label>
                            Username: 
                            <input type="text" name="username" value={editUser?.username || ''} onChange={handleInputChange} />
                        </label>
                        <label>
                            Email: 
                            <input type="text" name="email" value={editUser?.email || ''} onChange={handleInputChange} />
                        </label>
                    </>
                )}
            </div>

            <div className='page-container2'>
                <button className="btn-home" onClick={() => auth.logout()}>Logout</button>
                {!isEditing ? (
                    <button className="btn-home" onClick={() => setIsEditing(true)}>Edit Profile</button>
                ) : (
                    <>
                        <button className="btn-home" onClick={handleSave}>Save</button>
                        <button className="btn-home" onClick={() => setIsEditing(false)}>Cancel</button>
                        <button className="btn-home" onClick={handleDelete}>Delete Profile</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default User;
