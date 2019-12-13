import { Route } from "react-router-dom";
import React from 'react';
import Profile from './profile/profile';
import Quest from './quest/quest';
import QuestDetails from './questDetails/questDetails';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import CreateProfile from './createProfile/createProfile';
import Shop from './shop/shop';

import FirebaseTest from './firebaseTest/firebaseTest';
import { AuthProvider } from './firebaseTest/Auth';
import PrivateRoute from './firebaseTest/privateRoute';

import './App.css';

function App() {
  return (
    <AuthProvider>
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
        <Route
          exact path="/quest"
          render = { (props) =>
            <Quest/>
          }
        />
        <Route
          exact path="/quest/:id"
          render = { (props) =>
            <QuestDetails questId={props.match.params.id}/>
          }
        />
        <Route path="/shop" component={Shop}/>
        <Route path="/firebaseTest" component={FirebaseTest}/>
        <PrivateRoute path="/private" component={FirebaseTest}/>{/* Private route test (has to be logged in to access.) */}
      </div>
    </div>
    </AuthProvider>
  );
} export default App;
