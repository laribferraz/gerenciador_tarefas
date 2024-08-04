// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TaskForm = ({ createTask, updateTask, getTaskById }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  useEffect(() => {
    if (id) {
      // Fetch task data for editing
      const fetchTask = async () => {
        const task = await getTaskById(id);
        setTitle(task.title);
        setDescription(task.description);
      };
      fetchTask();
    }
  }, [id, getTaskById]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateTask(id, { title, description });
    } else {
      createTask({ title, description });
    }
    navigate('/tasks');
  };

  return (
    <div>
      <h3>{id ? 'Editar Tarefa' : 'Criar Tarefa'}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Descrição</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? 'Atualizar' : 'Criar'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
