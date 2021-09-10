import React, { Component } from 'react';
import { Div } from './style';

export default class Modal extends Component {
    constructor(props) {
        super(props);

        this.fecharModal = this.fecharModal.bind(this);
    }

    fecharModal() {
        this.props.fecharModal();
    }

    render() {

        return (
            <Div width={this.props.width} height={this.props.height}>
                <div>
                    <button id="fecharModal" onClick={this.fecharModal}>Fechar Modal</button>
                    {this.props.children}
                </div>
            </Div>
        )
    }
}
