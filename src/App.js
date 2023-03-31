import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import BasicNavbar from './components/navbar';
import Sidebar from './components/sidebar';
import Dashboard from './components/dashboard';
//import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
      <Sidebar />
      <Dashboard />
</div>
    </div>
  );
}

export default App;