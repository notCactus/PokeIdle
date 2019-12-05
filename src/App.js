import { Route } from "react-router-dom";
import React from 'react';
import Profile from './profile/profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route
          exact path="/"
          render = { () =>
            <Profile/>
          }
      />
    </div>
  );
}

export default App;
