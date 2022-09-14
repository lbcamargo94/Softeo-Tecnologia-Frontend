import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import './styles/index.css';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
