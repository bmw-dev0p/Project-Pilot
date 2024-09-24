// src/components/TaskColumn.tsx
import { useState, useEffect } from 'react';
import TaskCard from './TaskCard/TaskCard';
import TaskForm from './TaskForm/TaskForm';
import { StatusData } from '../interfaces/StatusData';
import { ApiMessage } from '../interfaces/ApiMessage';
import { retrieveTasks, createTask, updateTask, deleteTask } from '../api/taskAPI';
import { Task, 
  // TaskData
 } from '../interfaces/Types'; // Adjust import to include Task type
 import { TaskData } from '../interfaces/TaskData';
interface TaskColumnProps {
  key: number;
  id: number;
  title: string;
  update: (statusId: number, statusBody: StatusData) => Promise<StatusData | undefined>;
  delete: (statusId: number) => Promise<ApiMessage>;
  initialTasks?: TaskData[];
}
const TaskColumn: React.FC<TaskColumnProps> = ({ key, id, title }) => {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const fetchTasks = async () => {
    try {
      const data = await retrieveTasks();
      setTasks(data);
      console.log(data);
    } catch (err) {
      console.error('Failed to retrieve tasks', err);
    }
  };
  const addTask = async (newTask: TaskData) => {
    try {
      const data = await createTask(newTask);
      fetchTasks();
      return data;
    } catch (err) {
      console.error('Failed to add task', err);
    }
  };
  const editTask = async (updatedTask: TaskData) => {
    try {
      const body = {
        id: updatedTask.id,
        title: updatedTask.title,
        description: updatedTask.description,
        dueDate: updatedTask.dueDate,
        status_id: key,
        user_id: updatedTask.user_id,
      };
      if (body.id !== undefined) {
        const data = await updateTask(body.id, body);
        fetchTasks();
        return data;
      } else {
        throw new Error('Task ID is undefined');
      }
    } catch (err) {
      console.error('Failed to edit task', err);
    }
  };
  const removeTask = async (taskId: number): Promise<ApiMessage> => {
    try {
      const data = await deleteTask(taskId);
      fetchTasks();
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  };
  const openModal = (taskData?: TaskData) => {
    if (taskData) {
      // Convert TaskData to Task
      const task: Task = {
        id: taskData.id ?? Date.now(),
        title: taskData.title,
        description: taskData.description || '',
        dueDate: taskData.dueDate || '',
        assignedUser: taskData.assignedUser || 'Unassigned',
        status_id: taskData.status_id,
        user_id: taskData.user_id,
        assignedUsers: taskData.assignedUsers || [], // Ensure assignedUsers is an array
      };
      setCurrentTask(task);
    } else {
      setCurrentTask(null);
    }
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
          .filter((task) => task.status_id === id)
          .map((task) => (
            <TaskCard key={task.id} task={task} onEdit={() => openModal(task)} />
          ))
      )}
      {showForm && (
        <TaskForm
          onSubmit={(task: Task) => {
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