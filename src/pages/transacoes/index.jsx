import React, { Component } from 'react';

import { Div } from './style';
import { formatarNumberEmReal } from '../../utils/number';
import Input from '../input/index';

export default class Transacoes extends Component {
    constructor() {
        super();

        this.state = {
            valor: '',
            conta: '',
            categoria: '',
            descricao: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    async onSubmit(event) {
        event.preventDefault();

        console.log(this.state)
    }

    render() {
        return (
            <Div>
                <form onSubmit={this.onSubmit}>
                    <Input placeholder="0,00" label={"Valor"}
                        autoComplete="off"
                        type="formatNumber" name="valor" value={this.state.valor}
                        onChange={this.handleInputChange} required />

                    <Input placeholder="Selecione a conta de origem" label={"Conta"}
                        autoComplete="off"
                        type="text" name="conta" value={this.state.conta}
                        onChange={this.handleInputChange} required />

                    <Input placeholder="Selecione uma categoria" label={"Categoria"}
                        autoComplete="off"
                        type="text" name="categoria" value={this.state.categoria}
                        onChange={this.handleInputChange} required />

                    <Input placeholder="Digite uma descricao para a trasação" label={"Descrição"}
                        autoComplete="off"
                        type="text" name="descricao" value={this.state.descricao}
                        onChange={this.handleInputChange} required />

                    <button type="submit">Enviar</button>
                </form>
            </Div>
        )
    }
}
