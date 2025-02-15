import React, { useState } from 'react';
import EditTask from './EditTask';

const ParentComponent = () => {
  const [taskToEdit, setTaskToEdit] = useState({
    title: 'Sample Task',
    description: 'This is a description of the task.',
    date: '2025-01-30',
    priority: 'Medium',
    status: 'In Progress',
  });

  const handleUpdateTask = (updatedTask) => {
    console.log('Task updated:', updatedTask);
    // You can save the updated task to local storage, a backend, or update a state here
  };

  return (
    <div>
      <h1>Task Management</h1>
      <EditTask taskToEdit={taskToEdit} onUpdateTask={handleUpdateTask} />
    </div>
  );
};

export default ParentComponent;
