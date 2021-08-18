import React, { Component } from 'react';

import api from '../../services/api';

import { Div } from './style';
import Input from '../../components/input/index';
import Select from '../../components/select/index';

export default class Transacoes extends Component {
    constructor() {
        super();

        this.state = {
            valor: '',
            contas: [],
            categorias: [],
            contaSelecionada: '',
            categoriaSelecionada: '',
            descricao: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async componentDidMount() {
        const contas = await this.loadContas();
        const categorias = await this.loadCategorias();

        this.setState({
            contas,
            categorias
        });
    }

    async loadContas() {
        try {
            const contasRes = await api.get('/contas');
            return contasRes.data.documentos;
        } catch (error) {
            return [];
        }
    }

    async loadCategorias() {
        try {
            const categoriasRes = await api.get('/categorias');
            return categoriasRes.data.documentos;
        } catch (error) {
            return [];
        }
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
        try {
            event.preventDefault();

            const categorias = this.state.categorias
                .find(i => i._id === this.state.categoriaSelecionada);

            const contas = this.state.contas
                .find(i => i._id === this.state.contaSelecionada);

            var valor = this.state.valor.replaceAll('.', '');
            valor = valor.replaceAll(',', '.');

            if (typeof categorias.despesa !== "undefined") valor = valor * (-1);

            const body = {
                categorias,
                contas,
                valor,
                descricao: this.state.descricao
            }

            await api.post('receitasdespesas', body);

            window.location = 'home';
        } catch (error) {
            console.log(error.data)
        }
    }

    render() {
        return (
            <Div>
                <form onSubmit={this.onSubmit}>
                    <Select
                        label={"Categoria"}
                        name="categoriaSelecionada" value={this.state.categoriaSelecionada}
                        data={this.state.categorias}
                        onChange={this.handleInputChange} required />

                    <Select
                        label={"Conta"}
                        name="contaSelecionada" value={this.state.contaSelecionada}
                        data={this.state.contas}
                        onChange={this.handleInputChange} required />

                    <Input
                        label={"Valor"} autoComplete="off"
                        type="formatNumber" name="valor" value={this.state.valor}
                        onChange={this.handleInputChange} required />

                    <Input
                        label={"Descrição"} autoComplete="off"
                        type="text" name="descricao" value={this.state.descricao}
                        onChange={this.handleInputChange} required />

                    <button type="submit">Salvar</button>
                </form>
            </Div>
        )
    }
}
