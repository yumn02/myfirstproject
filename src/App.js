
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Welcome from './Welcome';

function App() {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup setUserInfo={setUserInfo} />} />
          <Route path="/login" element={<Login userInfo={userInfo} />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="*" element={<Navigate to="/signup" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
