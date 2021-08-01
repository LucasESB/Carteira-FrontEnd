import React, { Component } from 'react';

import api from '../../services/api';

import { Div } from './style';
import Input from '../../components/input';

export default class Categorias extends Component {
    constructor() {
        super();

        this.state = {
            descricao: '',
            essencial: false,
            investimento: false,
            receitaDespesa: 'despesa'

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

    onSubmit(event) {
        event.preventDefault();

        console.log(this.state)
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
                        label="Essencial"
                        htmlFor="essencial"
                        type="checkbox" name="essencial" value={this.state.essencial}
                        onChange={this.handleInputChange} />

                    <Input
                        label="Investimento"
                        htmlFor="investimento"
                        type="checkbox" name="investimento" value={this.state.investimento}
                        onChange={this.handleInputChange} />

                    <fieldset id="receitaDespesa" onChange={this.handleInputChange}>
                        <Input
                            label="Receita"
                            htmlFor="receita"
                            type="radio" name="receitaDespesa" value="receita"
                            required />

                        <Input
                            label="Despesa"
                            htmlFor="despesa"
                            defaultChecked
                            type="radio" name="receitaDespesa" value="despesa"
                            required />
                    </fieldset>

                    <button type="submit">Salvar</button>
                </form>
            </Div>
        )
    }
}
