import React from 'react';
import Header from './Component/Header';
import NewsList from './Component/NewsList';
import './App.css';
import Tophead from './Component/Tophead';

const App = () => {
  return (
    <div className="app-container">
      <Tophead/>
      <Header />
      <NewsList />
    </div>
  );
}

export default App;
