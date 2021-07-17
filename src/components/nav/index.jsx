import React, { Component } from 'react';

import { NavElement } from './style';

export default class Nav extends Component {
    render() {
        return (
            <NavElement show={this.props.show}>
                <ul>
                    {this.props.children}
                </ul>
            </NavElement>
        )
    }
}
