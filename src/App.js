import React from 'react';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login.js';
import Welcome from './components/Welcome.js';
import SignUp from './components/SignUp.js';

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<Welcome />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;

