// src/components/TaskItem.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TaskItem = ({ getTaskById }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const taskData = await getTaskById(id);
      setTask(taskData);
    };
    fetchTask();
  }, [id, getTaskById]);

  const handleDelete = () => {
    // Call a function to delete the task
    // For example, deleteTask(id);
    navigate('/tasks');
  };

  if (!task) return <div>Loading...</div>;

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleDelete} className="btn btn-danger">
        Excluir
      </button>
    </div>
  );
};

export default TaskItem;
