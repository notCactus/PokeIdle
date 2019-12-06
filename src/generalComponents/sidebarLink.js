import React, { Component } from 'react';
import { Link } from "react-router-dom"

class SidebarLink extends Component {
    render() {
        return (
            <Link to={this.props.to} value={this.props.value} 
                className={(this.props.view === this.props.value) ? 'selectedView' : undefined}>{this.props.value}
            </Link>
        );
    }
}

export default SidebarLink;