// src/components/TaskCard.tsx
import React from 'react';
import { FaPen } from 'react-icons/fa'; // Importing Font Awesome icon for editing

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  assignedUsers: string[];
}

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit }) => {
  return (
    <div className="task-card" onClick={() => onEdit(task)}>
      {/* Removed the img tag since it's not needed */}
      <h4 className="task-title">{task.title}</h4>
      <p className="task-description">{task.description}</p>
      <div className="task-footer">
        <FaPen
          className="edit-icon"
          onClick={(e) => {
            e.stopPropagation(); // Prevent parent onClick when editing
            onEdit(task);
          }}
        />
        <div className="task-assigned-users">
          {task.assignedUsers.map((user, index) => (
            <img
              key={index}
              src={`path/to/user/${user}.jpg`} // Example placeholder for user avatars
              alt={user}
              className="assigned-user-avatar"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
