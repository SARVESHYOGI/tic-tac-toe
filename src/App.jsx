import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
import Reset from './components/Reset';




function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <Board />
    </div>
  );
}

export default App;
