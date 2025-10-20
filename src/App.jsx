import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Works from './pages/Works';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Home />
        <Works />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
