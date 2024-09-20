import Auth from '../utils/auth';
import { UserData } from '../interfaces/UserData';
import { ApiMessage } from '../interfaces/ApiMessage';

const retrieveUsers = async () => {
  try {
    const response = await fetch('/users', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });
    const data = await response.json();

    if(!response.ok) {
      throw new Error('Invalid user API response, check network tab!');
    }

    return data;

  } catch (err) { 
    console.log('Error from data retrieval:', err);
    return [];
  }
}

const retrieveUser = async (id: number | null):Promise<UserData> => {
    try {
      const response = await fetch(`/users/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Auth.getToken()}`
        }
      });
      const data = await response.json();
  
      if(!response.ok) {
        throw new Error('Invalid user API response, check network tab!');
      }
  
      return data;
  
    } catch (err) { 
      console.log('Error from data retrieval:', err);
      return Promise.reject('Could not fetch volunteer');
    }
  }

  const updateUser = async (id: number, body: UserData): Promise<UserData> => {
    try {
      const response = await fetch(
        `/users/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body)
        }
      )
      const data = await response.json();
  
      if(!response.ok) {
        throw new Error('invalid API response, check network tab!');
      }
      return data;
    } catch (err) {
      console.error('Update did not work', err);
      return Promise.reject('Update did not work');
    }
  };

  const deleteUser = async (id: number): Promise<ApiMessage> => {
    try {
      const response = await fetch(
        `/users/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
      const data = await response.json();
  
      if(!response.ok) {
        throw new Error('invalid API response, check network tab!');
      }
  
      return data;
    } catch (err) {
      console.error('Error in deleting volunteer', err);
      return Promise.reject('Could not delete volunteer');
    }
  };

export { retrieveUsers, retrieveUser, updateUser, deleteUser };
