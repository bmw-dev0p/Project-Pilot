
import { useState } from 'react';
import TaskForm from './TaskForm';


const TaskCard = ({ task, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="task-card">
      {isEditing ? (
        <TaskForm
          onSubmit={editTask}
          initialTask={task}
          onClose={() => setIsEditing(false)}
        />
      ) : (
        <>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <div className="task-footer">
            <span>{task.dueDate}</span>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button>Add Comment</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCard;



