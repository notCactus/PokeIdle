import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import app from './base';

class PrivateRoutePresentation extends Component{
  render() {
    if (this.props.signedIn)
      return (
        <Route
          {...this.props}
        />
      )
    else {
      let mod = {...this.props};
      mod.render = () => <Redirect to={this.props.fallback}/>;
      return (
        <Route
          {...mod}
        />
      )
    }
  }

}

export default PrivateRoutePresentation;
