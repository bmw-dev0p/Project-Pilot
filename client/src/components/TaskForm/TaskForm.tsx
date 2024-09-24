// src/components/TaskForm/TaskForm.tsx
import { useState, useEffect } from 'react';
import { retrieveUsers } from '../../api/userAPI';
import { UserData } from '../../interfaces/UserData';
import { TaskData } from '../../interfaces/TaskData';

interface TaskFormProps {
  onSubmit: (task: Task) => void; // Change TaskData to Task here
  onDelete: (taskId: number) => void;
  onClose: () => void;
  initialTask?: TaskData | null;
  statusId: number
}

interface Task {
  id?: number;
  title: string;
  description: string;
  dueDate: string;
  assignedUser: string;
  status_id?:number;
  user_id?: number
}


const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, onDelete, onClose, initialTask, statusId }) => {
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersList = await retrieveUsers();
        setUsers(usersList);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);
  console.log(users);
  const [title, setTitle] = useState(initialTask?.title || '');
  const [description, setDescription] = useState(initialTask?.description || '');
  const [dueDate, setDueDate] = useState(initialTask?.dueDate || '');
  const [assignedUser, setAssignedUser] = useState(initialTask?.assignedUser || 'Unassigned');
console.log(assignedUser);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find(user => {
      console.log(`Comparing ${user.username} with ${assignedUser}`);
      return user.username === assignedUser;
    });
    console.log(`This is the user: ${user}`);
    const updatedTask: Task = {
      id: initialTask?.id ?? Date.now(),
      title,
      description,
      dueDate,
      assignedUser: assignedUser,
      status_id: statusId,
      user_id: user?.id ?? undefined
    };
    console.log('Updated Task:', updatedTask);
    onSubmit(updatedTask);
    onClose();
  };

  // const handleAddTask = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const addedTask: Task = {
  //     title,
  //     description,
  //     dueDate,
  //    assignedUser: assignedUser,
  //     status_id: statusId
  //   };
  //   console.log(assignedUser);
  //   onSubmit(addedTask);
  //   onClose();

  // };

  const handleDelete = () => {
    if (initialTask) {
      if (initialTask?.id !== undefined) {
        onDelete(initialTask.id);
      }
      onClose();
    }
  };

  return (
    <div className="task-modal">
      <div className="task-modal-header">
        <h3>{initialTask ? 'Edit Task' : 'Create Task'}</h3>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          placeholder="Title"
          value={title || ''}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="task-input"
        />
        <textarea
          placeholder="Description"
          value={description || ''}
          onChange={(e) => setDescription(e.target.value)}
          className="task-textarea"
        />
        <input
          type="date"
          value={dueDate || ''}
          onChange={(e) => setDueDate(e.target.value)}
          className="task-input"
        />
        <label>Assign User:</label>
        <select
          value={assignedUser || ''}
          onChange={(e) => setAssignedUser(e.target.value)}
          className="task-input"
        >
          {/* <option disabled selected>Select Username from Below</option> */}
          {users.map((user) => (
            <option key={user.id} value={user.username}>
              {user.username}
            </option>
          ))}
        </select>
        <div className="modal-buttons">
          <button type="submit" className="submit-button">
            {initialTask ? 'Save Changes' : 'Add Task'}
          </button>
          {initialTask && (
            <button type="button" className="delete-button" onClick={handleDelete}>
              Delete Task
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
