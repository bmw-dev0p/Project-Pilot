// src/components/TaskColumn.tsx
import { useState } from 'react';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';

interface TaskColumnProps {
  title: string;
  tasks: any[];
  addTask: (task: any) => void;
  editTask: (task: any) => void;
  deleteTask: (taskId: string) => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks, addTask }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="task-column">
      <h5>
        {title} <button onClick={() => setShowForm(true)}>+</button> {/* Add Task Button */}
      </h5>

      {showForm && (
        <TaskForm onSubmit={addTask} onClose={() => setShowForm(false)} />
      )}

      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
};

export default TaskColumn;



