import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import Compare from './pages/compare';  
import Timeline from './pages/timeline';
//import BasicNavbar from './components/navbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
      <Sidebar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Compare' element={<Compare />} />
          <Route path='/Time' element={<Timeline />} />
        </Routes>
<Footer />
</div>
    </div>
  );
}

export default App;