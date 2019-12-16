import React, {useContext, useState} from 'react';
import {Route, Redirect} from 'react-router-dom';
import { AuthContext } from "./Auth";
import app from './base';

const PrivateRoute = ({ component: RouteComponent, redirectTo = "/createProfile", ...rest }) => {
    //const {currentUser} = useContext(AuthContext);

    var currentUser = app.auth().currentUser;

    return (
      <Route
        {...rest}
        render={routeProps =>
          !!currentUser ? (
            <RouteComponent {...routeProps} />
          ) : (
            <Redirect to={redirectTo} />
          )
        }
      />
    );
  };

/*const PrivateRoute = ({ component: RouteComponent, redirectTo = "/createProfile",...rest }) => {
    //const {currentUser} = useContext(AuthContext);

    const [status, setStatus] = useState('waiting');

    let currentUser = null;

    getCurrentUser()
    .then((currUser) => {
        currentUser = currUser;
        console.log(currUser);
    })
    .then(()=>{
        setStatus('done');
    });

    if(status === 'done'){
        return (
            <Route
              {...rest}
              render={routeProps =>
                !!currentUser ? (
                  <RouteComponent {...routeProps} />
                ) : (
                  <Redirect to={redirectTo} />
                )
              }
            />
          );
    } else {
        return(<React.Fragment></React.Fragment>);
    }
  };*/

export default PrivateRoute;