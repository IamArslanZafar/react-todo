// components/Task.js
import React, { useState } from 'react';

const Task = ({ task, onEdit, onRemove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    onEdit(task.id, editedTask);
    setIsEditing(false);
  };

  return (
    <tr className="mb-2">
      <td className="text-center">
        {isEditing ? (
          <input
            type="text"
            className="form-control mb-2 w-100"
            value={editedTask.name}
            onChange={(e) => setEditedTask({ ...editedTask, name: e.target.value })}
          />
        ) : (
          task.name
        )}
      </td>
      <td className="text-center">
        {isEditing ? (
          <input
            type="text"
            className="form-control mb-2 w-100"
            value={editedTask.status}
            onChange={(e) => setEditedTask({ ...editedTask, status: e.target.value })}
          />
        ) : (
          task.status
        )}
      </td>
      <td className="d-flex justify-content-center">
        {isEditing ? (
          <button className="btn btn-success mb-2 me-2" onClick={handleEdit}>
            <i className="fas fa-save"></i> Save
          </button>
        ) : (
          <div className="btn-group">
            <button className="btn btn-warning mb-2 me-2" onClick={() => setIsEditing(true)}>
              <i className="fas fa-edit"></i> Edit
            </button>
            <button className="btn btn-danger mb-2" onClick={() => onRemove(task.id)}>
              <i className="fas fa-trash-alt"></i> Remove
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default Task;
