import React from 'react';
import logo from './logo.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewGame from './pages/NewGame';
import Statistics from './pages/Statistics';
import HomePage from './pages/HomePage.jsx';

function App() {
  return (
<Routes>
  <Route exact path="/" element={<HomePage/>} />
  <Route exact path="/newgame" element={<NewGame/>} />
  <Route exact path="/statistics" element={<Statistics/>} />
</Routes>
  );
}

export default App;
