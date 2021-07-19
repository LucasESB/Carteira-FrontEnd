import React, { Component } from 'react';

import { Div } from './style';

export default class BackendError extends Component {
    render() {
        return (
            <Div>
                <h1>Um erro inesperado ocorreu com o nosso backend :(</h1>
            </Div>
        )
    }
}
