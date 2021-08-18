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
            receitaDespesa: 'despesa',
            tipoReceitaDespesa: 'Variavel'

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

            const body = {
                descricao: this.state.descricao,
                essencial: this.state.essencial,
                investimento: this.state.investimento,
                [this.state.receitaDespesa]: this.state.tipoReceitaDespesa
            }

            await api.post('categorias', body);

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
                        label="Essencial"
                        htmlFor="essencial"
                        type="checkbox" name="essencial" checked={this.state.essencial}
                        onChange={this.handleInputChange} />

                    <Input
                        label="Investimento"
                        htmlFor="investimento"
                        type="checkbox" name="investimento" checked={this.state.investimento}
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

                    <fieldset id="tipoReceitaDespesa" onChange={this.handleInputChange}>
                        <Input
                            label="Variavel"
                            htmlFor="variavel"
                            defaultChecked
                            type="radio" name="tipoReceitaDespesa" value="Variavel"
                            required />

                        <Input
                            label="Fixa"
                            htmlFor="fixa"
                            type="radio" name="tipoReceitaDespesa" value="Fixa"
                            required />
                    </fieldset>

                    <button type="submit">Salvar</button>
                </form>
            </Div>
        )
    }
}
