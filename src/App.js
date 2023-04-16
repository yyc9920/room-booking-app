import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupScreen from './SignupScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignupScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
