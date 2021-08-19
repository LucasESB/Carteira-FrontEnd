import React, { Component } from 'react';
import api from '../../services/api';

import { Div } from './style';
import Input from '../../components/input/index';

export default class Contas extends Component {
    constructor() {
        super();

        this.state = {
            descricao: '',
            saldoInicial: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    async onSubmit(event) {
        try {
            event.preventDefault();

            var saldo = this.state.saldoInicial.replaceAll('.', '');
            saldo = saldo.replaceAll(',', '.');

            const body = {
                saldo,
                descricao: this.state.descricao
            }

            await api.post('contas', body);

            window.location = 'home';
        } catch (error) {
            console.log(error.data)
        }
    }

    render() {
        return (
            <Div>
                <form onSubmit={this.onSubmit}>
                    <Input
                        label="Descrição" autoComplete="off"
                        type="text" name="descricao" value={this.state.descricao}
                        onChange={this.handleInputChange} required />

                    <Input
                        label={"Saldo Inicial"} autoComplete="off"
                        type="formatNumber" name="saldoInicial" value={this.state.saldoInicial}
                        onChange={this.handleInputChange} required />


                    <button type="submit">Salvar</button>
                </form>
            </Div>
        )
    }
}
