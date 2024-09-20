import Auth from '../utils/auth';
import { TaskData } from '../interfaces/TaskData';
import { ApiMessage } from '../interfaces/ApiMessage';

const retrieveTasks = async () => {
    try {
      const response = await fetch('/tasks', {
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

  const retrieveTask = async (id: number | null):Promise<TaskData> => {
    try {
      const response = await fetch(`/task/${id}`, {
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
      return Promise.reject('Could not fetch task');
    }
}

  const createTask = async (body: TaskData): Promise<TaskData> => {
    try {
      const response = await fetch(
        '/tasks', {
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
      return Promise.reject('Could not create Task');
    }
  };

  const updateTask = async (id: number, body: TaskData): Promise<TaskData> => {
    try {
      const response = await fetch(
        `/tasks/${id}`, {
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

  const deleteTask = async (id: number): Promise<ApiMessage> => {
    try {
      const response = await fetch(
        `/tasks/${id}`, {
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

  export { retrieveTasks, retrieveTask, createTask, updateTask, deleteTask };