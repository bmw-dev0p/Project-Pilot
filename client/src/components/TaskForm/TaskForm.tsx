// TaskForm.tsx
import React, { useState } from 'react';
import { Task, TaskFormProps } from '../../interfaces/Types';

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, onDelete, onClose, initialTask }) => {
  const [title, setTitle] = useState(initialTask?.title || '');
  const [description, setDescription] = useState(initialTask?.description || '');
  const [dueDate, setDueDate] = useState(initialTask?.dueDate || '');
  const [assignedUser, setAssignedUser] = useState(initialTask?.assignedUsers[0] || 'Unassigned');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedTask: Task = {
      id: initialTask?.id || `task-${Date.now()}`,
      title,
      description,
      dueDate,
      assignedUsers: [assignedUser],
    };

    onSubmit(updatedTask);
    onClose();
  };

  const handleDelete = () => {
    if (initialTask) {
      onDelete(initialTask.id);
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="task-input"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="task-textarea"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="task-input"
        />
        <label>Assign User:</label>
        <select
          value={assignedUser}
          onChange={(e) => setAssignedUser(e.target.value)}
          className="task-input"
        >
          {['Nadia Hashemi', 'Unassigned'].map((user) => (
            <option key={user} value={user}>
              {user}
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
