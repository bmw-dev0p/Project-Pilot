import { UserLogin } from "../interfaces/UserLogin";

interface UserProps {
    user?: UserLogin;
    //   deleteUser: (userId: number) => Promise<void>;
}

const User = ({ user }: UserProps) => {
    if (!user) {
        return <h1>User not found</h1>;
    } else {
        return (
            <div>
                <h1>User Page</h1>
                <h2>
                    Welcome, {user.fname} {user.lname}
                </h2>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <img src={user.img} alt="profile_pic" />
            </div>
        );
    }
};

export default User;
