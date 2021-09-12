import React, { Component } from 'react';
import api from '../../../services/api';

import { Form } from './style';
import Modal from '../../../components/modal/index';
import Input from '../../../components/input/index';

export default class InserirEditarCategoria extends Component {
    constructor(props) {
        super(props);

        if (this.props.categoriaEdit != null) this.setDadosCategorias();
        else this.setDadosDefault();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    setDadosCategorias() {
        let receitaDespesa = null;
        let tipoReceitaDespesa = null;

        if (this.props.categoriaEdit.despesa) {
            receitaDespesa = 'despesa';
            tipoReceitaDespesa = this.props.categoriaEdit.despesa.tipo;

        } else {
            receitaDespesa = 'receita';
            tipoReceitaDespesa = this.props.categoriaEdit.receita.tipo;
        }

        this.state = {
            descricao: this.props.categoriaEdit.descricao,
            essencial: this.props.categoriaEdit.essencial,
            investimento: this.props.categoriaEdit.investimento,
            receitaDespesa: receitaDespesa,
            tipoReceitaDespesa: tipoReceitaDespesa
        }
    }

    setDadosDefault() {
        this.state = {
            descricao: '',
            essencial: false,
            investimento: false,
            receitaDespesa: 'despesa',
            tipoReceitaDespesa: 'Variavel'
        }
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

            if (this.props.categoriaEdit != null) {
                await this.editarCategoria(body);
            } else {
                await this.inserirCategoria(body);
            }

            this.props.fecharModal();
        } catch (error) {
            console.log(error.data)
        }
    }

    async editarCategoria(body) {
        await api.put(`categorias/${this.props.categoriaEdit._id}`, body);

        body._id = this.props.categoriaEdit._id;
        this.props.updateCategoria(body);
    }

    async inserirCategoria(body) {
        const { data: { documentos } } = await api.post('categorias', body);

        if (documentos.length > 0) {
            this.props.addCategoria(documentos[0]);
        }
    }

    render() {
        return (
            <Modal fecharModal={this.props.fecharModal}>
                <Form onSubmit={this.onSubmit}>
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

                    <fieldset id="receitaDespesa" onChange={this.handleInputChange} >
                        {
                            this.state.receitaDespesa === 'receita'
                                ?
                                <React.Fragment>
                                    <Input
                                        label="Receita"
                                        htmlFor="receita"
                                        defaultChecked
                                        type="radio" name="receitaDespesa" value="receita"
                                        required />

                                    <Input
                                        label="Despesa"
                                        htmlFor="despesa"
                                        type="radio" name="receitaDespesa" value="despesa"
                                        required />
                                </React.Fragment>
                                :
                                <React.Fragment>
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
                                </React.Fragment>
                        }
                    </fieldset>

                    <fieldset id="tipoReceitaDespesa" onChange={this.handleInputChange}>
                        {
                            this.state.tipoReceitaDespesa === 'Variavel'
                                ?
                                <React.Fragment>
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
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <Input
                                        label="Variavel"
                                        htmlFor="variavel"
                                        type="radio" name="tipoReceitaDespesa" value="Variavel"
                                        required />

                                    <Input
                                        label="Fixa"
                                        htmlFor="fixa"
                                        defaultChecked
                                        type="radio" name="tipoReceitaDespesa" value="Fixa"
                                        required />
                                </React.Fragment>
                        }
                    </fieldset>

                    <button type="submit">Salvar</button>
                </Form>
            </Modal>
        )
    }
}
