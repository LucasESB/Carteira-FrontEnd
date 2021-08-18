import React, { Component } from 'react';

import { Div } from './style';
import EmManutencao from '../../assets/EmManutencao.gif';

export default class Configuracao extends Component {
    render() {
        return (
            <Div>
                <img src={EmManutencao} alt="Em Manutenção" />
                <h1>configurações</h1>
            </Div>
        )
    }
}
