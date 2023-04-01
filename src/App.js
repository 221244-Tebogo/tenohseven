import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
//import Landing from './pages/landing';
//import Compare from './pages/compare';  
//import Timeline from './pages/timeline';
//import BasicNavbar from './components/navbar';
import Sidebar from './components/sidebar';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
      <Sidebar />
      <Dashboard />
      <div></div>
</div>
    </div>
  );
}

export default App;