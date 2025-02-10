function TaskCard({ task }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h3 className="text-xl font-semibold">{task.title}</h3>
        <p className="text-gray-600">Priority: {task.priority}</p>
        <p className="text-gray-600">Status: {task.status}</p>
      </div>
    );
  }
  
  export default TaskCard;
  