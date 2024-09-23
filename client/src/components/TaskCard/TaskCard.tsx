// src/components/TaskCard.tsx
import React, { useEffect, useState } from 'react';
import { FaPen } from 'react-icons/fa'; // Importing Font Awesome icon for editing
import { TaskData } from '../../interfaces/TaskData';
import { retrieveUser } from '../../api/userAPI';
import { UserData } from '../../interfaces/UserData';

interface TaskCardProps {
  task: TaskData;
  onEdit: (task: TaskData) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit }) => {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);

  useEffect(() => {
    if (task.user_id !== undefined && task.user_id !== null) {
      retrieveUser(task.user_id).then(setCurrentUser);
    }
  }, [task.user_id]);

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
          {currentUser && (
            <img
              src={currentUser.img} // Example placeholder for user avatars
              alt={`${currentUser.fname}'s Profile`}
              className="assigned-user-avatar"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
