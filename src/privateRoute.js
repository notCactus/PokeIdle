import React, {useContext, useState} from 'react';
import {Route, Redirect} from 'react-router-dom';
import { AuthContext } from "./Auth";
import app from './base';

const PrivateRoute = ({ component: RouteComponent, render: renderFunction, redirectTo = "/createProfile", ...rest }) => {

    let currentUser = app.auth().currentUser;
    console.log(renderFunction);
    //console.log(RouteComponentRender);

    if(typeof RouteComponent !== 'undefined'){
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
        return (
            <Route
              {...rest}
              render={(props)=>
                !!currentUser ? (renderFunction(props)) : (<Redirect to={redirectTo} />)
              }
            />
        );
    }

    
  };

export default PrivateRoute;