import React from 'react'
import { NavbarComp } from './components';
import MainRoutes from './config/routes';

function App() {
  return (
    <div className="App">
      <NavbarComp />

      <MainRoutes />
    </div>
  );
}

export default App;
