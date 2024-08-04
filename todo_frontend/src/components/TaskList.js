// src/components/TaskList.js
import React from 'react';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h3>Tarefas</h3>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td>{task.title}</td>
              <td>
                <Link to={`/tasks/${task.id}`} className="btn btn-info btn-sm me-2">Exibir</Link>
                <Link to={`/tasks/edit/${task.id}`} className="btn btn-warning btn-sm">Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;