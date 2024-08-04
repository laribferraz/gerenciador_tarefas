// src/pages/TasksPage.js
import React, { useState } from 'react';
import { Tab, Tabs, Button } from 'react-bootstrap'; // Importa Bootstrap corretamente
import { useNavigate } from 'react-router-dom';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';


// Mock data and functions
const mockTasks = [
  { id: 1, title: 'Tarefa 1', description: 'Descrição da tarefa 1' },
  { id: 2, title: 'Tarefa 2', description: 'Descrição da tarefa 2' },
];

const TasksPage = () => {
  const [tasks, setTasks] = useState(mockTasks);
  const navigate = useNavigate();

  const createTask = (task) => {
    // Add logic to create task
    setTasks([...tasks, { id: tasks.length + 1, ...task }]);
  };

  const updateTask = (id, updatedTask) => {
    // Add logic to update task
    setTasks(tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task)));
  };

  const getTaskById = (id) => {
    // Add logic to get task by ID
    return tasks.find(task => task.id === parseInt(id));
  };

  const handleLogout = () => {
    // Add logic to handle logout, e.g., clear user session or token
    // For this example, we'll just navigate to the login page
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <h1>Painel de Tarefas</h1>
        <Button variant="danger" onClick={handleLogout}>Logout</Button>
      </div>
      <Tabs defaultActiveKey="list" id="tasks-tabs" className="mb-3">
        <Tab eventKey="list" title="Tarefas">
          <TaskList tasks={tasks} />
        </Tab>
        <Tab eventKey="create" title="Criar">
          <TaskForm createTask={createTask} updateTask={updateTask} getTaskById={getTaskById} />
        </Tab>
        <Tab eventKey="view" title="Exibir">
          <p>Selecione uma tarefa para exibir.</p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TasksPage;
