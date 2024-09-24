// src/components/Dashboard.tsx
import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import TaskForm from '../TaskForm/TaskForm';
import ColumnHeader from '../ColumnHeader';
import { Task, Columns } from '../../interfaces/Types';
import { FaPen, FaUser, FaMinus } from 'react-icons/fa';
import './Dashboard.css';
import { retrieveStatuses } from '../../api/statusAPI';
import { retrieveTasks } from '../../api/taskAPI';
import { StatusData } from '../../interfaces/StatusData';
import { TaskData } from '../../interfaces/TaskData';

// Initial setup of columns

const Dashboard: React.FC = () => {
  const [statuses, setStatuses] = useState<StatusData[]>([]);
  const [tasks, setTasks] = useState<TaskData[]>([]);

  useEffect(() => {
    const fetchStatuses = async () => {
      const data = await retrieveStatuses();
      setStatuses(data)
    };
    const fetchTasks = async () => {
      const data = await retrieveTasks();
      setTasks(data)
    }; 
    fetchStatuses();
    fetchTasks();
  }, []
  );
        console.log('these are statuses before for loop:');
    console.log(statuses);;
  console.log(`these are tasks:`);
  console.log(tasks);
  
  if (statuses) {
    for (let i = 0; i < statuses.length; i++) {
      const initialColumns = statuses[i];
      console.log(`these are statuses after for loop:`);
      console.log(initialColumns);
      
    } 
  }
  const initialColumns: Columns = {
    todo: { name: 'To Do', items: [], color: '#FF4D4D' },
    inProgress: { name: 'In Progress', items: [], color: '#FFA500' },
    inReview: { name: 'In Review', items: [], color: '#1E90FF' },
    done: { name: 'Done', items: [], color: '#32CD32' },
  };
  const [columns, setColumns] = useState<Columns>(initialColumns);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [currentColumn, setCurrentColumn] = useState<string>('');
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: { ...sourceColumn, items: sourceItems },
      [destination.droppableId]: { ...destColumn, items: destItems },
    });
  };
  const handleAddTask = (columnId: string) => {
    setCurrentColumn(columnId);
    setCurrentTask(null);
    setShowTaskForm(true);
  };
  const handleTaskSubmit = (task: Task) => {
    if (!currentColumn || !columns[currentColumn]) return;
    const updatedItems = columns[currentColumn].items.some((t) => t.id === task.id)
      ? columns[currentColumn].items.map((t) => (t.id === task.id ? task : t))
      : [...columns[currentColumn].items, task];
    setColumns({
      ...columns,
      [currentColumn]: {
        ...columns[currentColumn],
        items: updatedItems,
      },
    });
    setShowTaskForm(false);
  };
  const handleTaskDelete = (taskId: number) => {
    setColumns({
      ...columns,
      [currentColumn]: {
        ...columns[currentColumn],
        items: columns[currentColumn].items.filter((task) => task.id !== taskId),
      },
    });
  };
  const handleColumnNameEdit = (columnId: string, newName: string) => {
    setColumns({
      ...columns,
      [columnId]: {
        ...columns[columnId],
        name: newName,
      },
    });
  };
  const handleAddColumn = () => {
    const newColumnId = `column-${Date.now()}`;
    setColumns({
      ...columns,
      [newColumnId]: {
        name: 'New Column',
        items: [],
        color: '#ccc',
      },
    });
  };
  const handleRemoveColumn = (columnId: string) => {
    const updatedColumns = { ...columns };
    delete updatedColumns[columnId];
    setColumns(updatedColumns);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board-container">
        {Object.entries(columns).map(([columnId, column]) => (
          <Droppable droppableId={columnId} key={columnId}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="task-column">
                <div className="column-header">
                  <ColumnHeader
                    name={column.name}
                    color={column.color}
                    onAddTask={() => handleAddTask(columnId)}
                    onEditColumnName={(newName) => handleColumnNameEdit(columnId, newName)}
                  />
                  <button className="remove-column-button" onClick={() => handleRemoveColumn(columnId)}>
                    <FaMinus />
                  </button>
                </div>
                {column.items.length === 0 && (
                  <button className="create-task-placeholder" onClick={() => handleAddTask(columnId)}>
                    + Create Task
                  </button>
                )}
                {column.items.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="task-card"
                      >
                        <h6 className="card-title">{task.title}</h6>
                        <p className="card-text">{task.description}</p>
                        <div className="task-card-footer">
                          <FaUser className="user-icon" title={task.assignedUsers[0]} />
                          <FaPen
                            className="edit-icon"
                            onClick={() => {
                              setCurrentTask(task);
                              setCurrentColumn(columnId);
                              setShowTaskForm(true);
                            }}
                          />
                        </div>
                        <button className="add-task-button" onClick={() => handleAddTask(columnId)}>
                          +
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))}
                <button className="add-task-button" onClick={() => handleAddTask(columnId)}>
                  +
                </button>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
        <button className="add-column-button" onClick={handleAddColumn}>
          +
        </button>
        {showTaskForm && (
          <TaskForm
            onSubmit={handleTaskSubmit}
            onDelete={handleTaskDelete}
            onClose={() => setShowTaskForm(false)}
            initialTask={currentTask}
            statusId={1} // <-- Add this line with the correct statusId based on the column
          />
        )}
      </div>
    </DragDropContext>
  );
};
export default Dashboard;