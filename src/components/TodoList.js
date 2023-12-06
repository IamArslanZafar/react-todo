// components/TodoList.js
import React, { useState } from 'react';
import Task from './Task';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: '', status: '' });

  const handleAddTask = () => {
    if (newTask.name.trim() !== '' && newTask.status.trim() !== '') {
      setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
      setNewTask({ name: '', status: '' });
    } else {
      alert("Please fill in both 'Add a New Task' and 'Add a New Status'");
    }
  };

  const handleEditTask = (taskId, editedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...editedTask } : task
    );
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5 mx-auto bg-light rounded p-4" style={{ background: 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)', color: 'white' }}>
      <h1 className="mb-4 text-center">Todo List</h1>
      <div className="row">
        <div className="col-md-6 mb-3">
          <h2 className="h5 text-center">Add a New Task</h2>
          <input
            type="text"
            placeholder="Task Name"
            className="form-control"
            value={newTask.name}
            onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
          />
        </div>
        <div className="col-md-4 mb-3">
          <h2 className="h5 text-center">Add a New Status</h2>
          <input
            type="text"
            placeholder="Status"
            className="form-control"
            value={newTask.status}
            onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
          />
        </div>
        <div className="col-md-2 mb-3 d-flex align-items-end">
          <button className="btn btn-primary w-100" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
      </div>
      <div className="row">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th colSpan="3" className="text-center h4">
                List of Works (TODO)
              </th>
            </tr>
            <tr>
              <th scope="col" className="text-center">Task Name</th>
              <th scope="col" className="text-center">Status</th>
              <th scope="col" className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onEdit={handleEditTask}
                onRemove={handleRemoveTask}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
