// src/pages/Home.js
import React from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <LoginForm />
        </div>
        <div className="col-md-6">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
