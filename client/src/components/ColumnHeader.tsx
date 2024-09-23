// src/components/ColumnHeader.tsx
import React, { useState } from 'react';

interface ColumnHeaderProps {
  name: string;
  color: string;
  onAddTask: () => void;
  onEditColumnName: (newName: string) => void;
}

const ColumnHeader: React.FC<ColumnHeaderProps> = ({ name, color, onAddTask, onEditColumnName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [columnName, setColumnName] = useState(name);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumnName(e.target.value);
  };

  const handleNameSubmit = () => {
    onEditColumnName(columnName);
    setIsEditing(false);
  };

  return (
    <div className="column-header">
      <div className="header-content">
        <span className="color-circle" style={{ backgroundColor: color }}></span>
        {isEditing ? (
          <input
            type="text"
            value={columnName}
            onChange={handleNameChange}
            onBlur={handleNameSubmit}
            className="column-name-input"
            autoFocus
          />
        ) : (
          <h5 className="column-name" onClick={() => setIsEditing(true)}>
            {columnName}
          </h5>
        )}
        <button onClick={onAddTask} className="add-task-button">
          +
        </button>
      </div>
    </div>
  );
};

export default ColumnHeader;
