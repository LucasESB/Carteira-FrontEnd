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
            contaSelecionada: '',
            categoria: '',
            descricao: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async componentDidMount() {
        const contas = await this.loadContas();
        this.setState({
            contas
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

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        //TODO: Ao selecionar um select não esta vindo a campo value dentro do evento
        console.log(target)

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
                    <Input
                        label={"Valor"} autoComplete="off"
                        type="formatNumber" name="valor" value={this.state.valor}
                        onChange={this.handleInputChange} required />

                    <Select
                        label={"Conta"}
                        name="conta" value={this.state.contaSelecionada}
                        data={this.state.contas}
                        onChange={this.handleInputChange} required />

                    <Input
                        label={"Categoria"} autoComplete="off"
                        type="text" name="categoria" value={this.state.categoria}
                        onChange={this.handleInputChange} required />

                    <Input
                        label={"Descrição"} autoComplete="off"
                        type="text" name="descricao" value={this.state.descricao}
                        onChange={this.handleInputChange} required />

                    <button type="submit">Enviar</button>
                </form>
            </Div>
        )
    }
}
