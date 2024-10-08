import Auth from '../utils/auth';
import { StatusData } from '../interfaces/StatusData';
import { ApiMessage } from '../interfaces/ApiMessage';

const retrieveStatuses = async () => {
    try {
      const response = await fetch('/status', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Auth.getToken()}`
        }
      });
      const data = await response.json();
  
      if(!response.ok) {
        throw new Error('Invalid task API response, check network tab!');
      }
  
      return data;
  
    } catch (err) { 
      console.log('Error from data retrieval:', err);
      return [];
    }
  }

  const retrieveStatus = async (id: number | null):Promise<StatusData> => {
    try {
      const response = await fetch(`/status/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Auth.getToken()}`
        }
      });
      const data = await response.json();
  
      if(!response.ok) {
        throw new Error('Invalid task API response, check network tab!');
      }
  
      return data;
  
    } catch (err) { 
      console.log('Error from data retrieval:', err);
      return Promise.reject('Could not fetch status');
    }
}

  const createStatus = async (body: StatusData): Promise<StatusData> => {
    try {
      const response = await fetch(
        '/status', {
          method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${Auth.getToken()}`
            },
          body: JSON.stringify(body)
        }
      )
      const data = response.json();
  
      if(!response.ok) {
        throw new Error('invalid API response, check network tab!');
      }
      return data;
    } catch (err) {
      console.log('Error from Task Creation: ', err);
      return Promise.reject('Could not create Status');
    }
  };

  const updateStatus = async (id: number, body: StatusData): Promise<StatusData> => {
    try {
      const response = await fetch(
        `/status/${id}`, {
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

  const deleteStatus = async (id: number): Promise<ApiMessage> => {
    try {
      const response = await fetch(
        `/status/${id}`, {
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
      console.error('Error in deleting task', err);
      return Promise.reject('Could not delete task');
    }
  };

  export { retrieveStatuses, retrieveStatus, createStatus, updateStatus, deleteStatus };