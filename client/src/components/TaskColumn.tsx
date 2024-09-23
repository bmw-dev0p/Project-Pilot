// src/components/TaskColumn.tsx
import { useState, useEffect } from 'react';
import TaskCard from './TaskCard/TaskCard';
import TaskForm from './TaskForm/TaskForm';
import { StatusData } from '../interfaces/StatusData';
import { ApiMessage } from '../interfaces/ApiMessage';
import { retrieveTasks, createTask, updateTask, deleteTask } from '../api/taskAPI';
import { TaskData } from '../interfaces/TaskData';

// interface Task {
//   id: string;
//   title: string;
//   description?: string;
//   dueDate?: string;
//   status?: number;
//   assignedUser?: number;
// }

interface TaskColumnProps {
  key: number
  id:number
  title: string;
  update: (statusId: number, statusBody: StatusData) => Promise<StatusData | undefined>;

  delete: (statusId: number) => Promise<ApiMessage>;
  initialTasks?: TaskData[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ key, id, title }) => {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [currentTask, setCurrentTask] = useState<TaskData | null>(null);

  const fetchTasks = async() => {
    try {
      const data = await retrieveTasks();
      setTasks(data);
      console.log(data);
    } catch (err) {
      console.error('Failed to retrieve tasks', err);
    }
  }

  const addTask = async (newTask: TaskData) => {
    try {
      const data = await createTask(newTask);
      fetchTasks();
      return data
    } catch(err) {
      console.error('Failed to add task', err);
    }
  };

  const editTask = async (updatedTask: TaskData) => {
try {
  console.log(updatedTask);
  const body = {
    id: updatedTask.id,
    title: updatedTask.title,
    description: updatedTask.description,
    dueDate: updatedTask.dueDate,
    status_id: key,
    user_id: updatedTask.user_id
  };
  if (body.id !== undefined) {
    const data = await updateTask(body.id, body);
    fetchTasks();
    return data;
  } else {
    throw new Error('Task ID is undefined');
  }
  } catch (err) {
    console.error('Failed to edit task', err)
  }
  };

  const removeTask = async (taskId: number): Promise<ApiMessage> => {
    try {
      const data = await deleteTask(taskId);
      fetchTasks();
      return data
    } catch (err) {
      return Promise.reject(err)
    }
  };

  const openModal = (task?: TaskData) => {
    setCurrentTask(task || null);
    setShowForm(true);
  };

  useEffect(() => {
    fetchTasks();
  }, []);
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
        tasks
        .filter(task => task.status_id === id)
        .map((task) => (
          <TaskCard key={task.id} task={task} onEdit={() => openModal(task)} />
        ))
      )}

      {showForm && (
        <TaskForm
          onSubmit={(task:TaskData) => {
            currentTask ? editTask(task) : addTask(task);
            setShowForm(false);
          }}
          onDelete={removeTask}
          onClose={() => setShowForm(false)}
          initialTask={currentTask}
          statusId={id}
        />
      )}
    </div>
  );
};

export default TaskColumn;
