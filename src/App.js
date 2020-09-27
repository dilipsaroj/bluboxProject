import React from 'react';
import './App.css';
import Header from './component/header/header';
import Admin from './component/admin/admin';
import Dashboard from './component/dashboard/dashboard';

function App() {

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className="main_section">
        <div className="left-panel">
          <Admin />
        </div>
        <div className="right-panel">
          <Dashboard />
        </div>
      </div>

    </div>
  );


}

export default App;
