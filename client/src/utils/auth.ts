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

  
}

// Export an instance of the AuthService class
export default new AuthService();
