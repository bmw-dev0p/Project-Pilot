// src/components/TaskColumn.tsx
import { useState } from 'react';
import TaskCard from './TaskCard/TaskCard';
import TaskForm from './TaskForm/TaskForm';

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  assignedUsers: string[];
}

interface TaskColumnProps {
  title: string;
  initialTasks?: Task[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, initialTasks = [] }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [showForm, setShowForm] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  const addTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const editTask = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const openModal = (task?: Task) => {
    setCurrentTask(task || null);
    setShowForm(true);
  };

  return (
    <div className="task-column">
      <div className="column-header">
        <h5 className="column-title">{title}</h5>
        <button className="add-task-button" onClick={() => openModal()}>
          +
        </button>
      </div>

      {tasks.length === 0 ? (
        <div className="empty-column" onClick={() => openModal()}>
          + Create issue
        </div>
      ) : (
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} onEdit={() => openModal(task)} />
        ))
      )}

      {showForm && (
        <TaskForm
          onSubmit={(task) => {
            currentTask ? editTask(task) : addTask(task);
            setShowForm(false);
          }}
          onDelete={deleteTask}
          onClose={() => setShowForm(false)}
          initialTask={currentTask || undefined}
        />
      )}
    </div>
  );
};

export default TaskColumn;
