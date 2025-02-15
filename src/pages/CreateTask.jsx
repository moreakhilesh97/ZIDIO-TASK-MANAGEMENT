import React, { useState, useEffect } from 'react';

const CreateTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    date: '',
    priority: '',
    status: '',
  });

  const [timer, setTimer] = useState(600); 
  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task Created:', task);
  
    setTimer(600); 
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="create-task-container">
      <h2>Create Task</h2>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Enter task title"
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Enter task description"
            required
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={task.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Priority</label>
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            required
          >
            <option value="">Select priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div>
          <label>Status</label>
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            required
          >
            <option value="">Select status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        
        <div className="task-actions">
          <p>Time Remaining: {formatTime(timer)}</p>
          <button type="submit">Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
