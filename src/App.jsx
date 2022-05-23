import React from 'react'
import { Footer, NavbarComp } from './components';
import MainRoutes from './config/routes';

function App() {
  return (
    <div className="App">
      <NavbarComp />

      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
