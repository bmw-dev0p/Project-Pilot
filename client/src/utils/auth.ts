import { jwtDecode } from 'jwt-decode';
import { UserLogin } from '../interfaces/UserLogin';

class AuthService {
  loggedIn() {
    const token = this.getToken();
    return !!token;
  }

  getToken(): string {
    return localStorage.getItem('id_token') || '';
  }

  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }

  async getUserProperties() {
    const token = this.getToken();
    if (!token) {
      return null; // Return null if not logged in
    }

    try {
      const decodedToken = jwtDecode<UserLogin>(token);
      return decodedToken; // Return all user properties
    } catch (error) {
      console.error('Error decoding token:', error);
      return null; // Return null on error
    }
  }
  async updateUserProperties(userId: number, updatedUser: { username: string; password: string }): Promise<UserLogin | null> {
    const token = this.getToken();
    if (!token) {
      return null; // No token, not logged in
    }
  
    try {
      // Send PUT request to update user by ID
      const response = await fetch(`/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,  // Pass token for authentication if needed
        },
        body: JSON.stringify(updatedUser),  // Send only the username and password
      });
  
      if (!response.ok) {
        throw new Error('Failed to update user properties');
      }
  
      const updatedUserResponse: UserLogin = await response.json();  // Get updated user data from response
      return updatedUserResponse;  // Return updated user
    } catch (error) {
      console.error('Error updating user properties:', error);
      return null;  // Return null on failure
    }
  }
}

// Export an instance of the AuthService class
export default new AuthService();
