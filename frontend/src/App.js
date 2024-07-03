import logo from './logo.svg';

import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React from 'react';
import {Header} from './Components/Header.js';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Остальная часть вашего приложения */}
    </div>
  );
}

export default App;
