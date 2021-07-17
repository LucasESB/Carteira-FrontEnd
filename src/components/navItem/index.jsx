import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Li } from './style';

export default class NavItem extends Component {
    render() {
        return (
            <Li>
                <Link to={this.props.to}>
                    {this.props.icon}
                    {this.props.children}
                </Link>
            </Li>
        )
    }
}
