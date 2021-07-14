import React, { Component } from 'react';

import { MainElement } from './style';

export default class Main extends Component {
    render() {
        return (
            <MainElement>
                {this.props.children}
            </MainElement>
        )
    }
}
