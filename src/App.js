import { Route } from "react-router-dom";
import React from 'react';
import Profile from './profile/profile';
import Quest from './quest/quest';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import CreateProfile from './createProfile/createProfile';
import Shop from './shop/shop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div>
        <Header/>
        <Route
          exact path="/profile"
          render = { (props) =>
            <Profile/>
          }
        />
        <Route path="/createProfile" component={CreateProfile}/>
<<<<<<< HEAD
        <Route
          exact path="/quest"
          render = { (props) =>
            <Quest/>
          }
        />
=======
        <Route path="/shop" component={Shop}/>
>>>>>>> b5f6fd4be098bec2e721ee63cc074d95a88b89dc
      </div>
    </div>
  );
} export default App;
