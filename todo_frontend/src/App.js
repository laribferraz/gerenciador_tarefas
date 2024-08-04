import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TasksPage from './pages/TasksPage';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks/*" element={<TasksPage />} />
      </Routes>
    </Router>
  );
}

export default App;
