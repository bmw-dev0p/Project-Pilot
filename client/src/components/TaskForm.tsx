// src/components/TaskForm.tsx
import React, { useState } from 'react';

interface TaskFormProps {
  onSubmit: (task: any) => void;
  initialTask?: any;
  onClose: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialTask, onClose }) => {
  const [title, setTitle] = useState(initialTask?.title || '');
  const [description, setDescription] = useState(initialTask?.description || '');
  const [dueDate, setDueDate] = useState(initialTask?.dueDate || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, dueDate });
    onClose();
  };

  return (
    <div className="task-form">
      <h3>{initialTask ? 'Edit Task' : 'Add Task'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="submit">{initialTask ? 'Save Changes' : 'Add Task'}</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default TaskForm;
