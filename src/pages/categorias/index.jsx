import React, { Component } from 'react';

import { Div } from './style';
import InserirEditarCategoria from './inserirEditarCategoria/index';
import api from '../../services/api';

export default class Categorias extends Component {
    constructor() {
        super();

        this.state = {
            abrirModal: false,
            categoriaSelecionada: null,
            listCategorias: []
        }

        this.abrirFecharModal = this.abrirFecharModal.bind(this);
        this.addCategoria = this.addCategoria.bind(this);
        this.inserirEditar = this.inserirEditar.bind(this);
        this.atualizarCategoria = this.atualizarCategoria.bind(this);
    }

    async componentDidMount() {
        const listCategorias = await this.getCategorias();
        this.setState({ listCategorias });
    }

    async getCategorias() {
        try {
            const { data: { documentos } } = await api.get("/categorias");
            return documentos;
        } catch (error) {
            return [];
        }
    }

    async abrirFecharModal() {
        await this.setState({ abrirModal: !this.state.abrirModal });

        if (!this.state.abrirModal && this.state.categoriaSelecionada != null)
            this.setState({ categoriaSelecionada: null });
    }

    addCategoria(categoria) {
        this.state.listCategorias.push(categoria);
    }

    atualizarCategoria(categoria) {
        let { listCategorias } = this.state;

        listCategorias
            .map(c => {
                if (c._id === categoria._id) {
                    return categoria;
                }

                return c;
            });

        

            listCategorias.forEach(c => console.log(c));

        this.setState({ listCategorias: listCategorias });
    }

    inserirEditar() {
        if (this.state.categoriaSelecionada == null) {
            return <InserirEditarCategoria
                fecharModal={this.abrirFecharModal}
                addCategoria={this.addCategoria}
            />;
        }

        return <InserirEditarCategoria
            fecharModal={this.abrirFecharModal}
            categoriaEdit={this.state.categoriaSelecionada}
            updateCategoria={this.atualizarCategoria}
        />;
    }

    editar(categoria) {
        this.setState({ categoriaSelecionada: categoria });
        this.abrirFecharModal();
    }

    render() {
        return (
            <React.Fragment>
                {this.state.abrirModal ? this.inserirEditar() : ""}

                <Div>
                    <div id="areaCategorias">
                        <div id="acoes">
                            <button >Pesquisar</button> <br />
                            <button onClick={this.abrirFecharModal}>Adicionar</button> <br />
                        </div>

                        <div id="listCategorias">
                            <ul>
                                {
                                    this.state.listCategorias
                                        .map(i =>
                                            <li key={i._id} onClick={() => this.editar(i)}>
                                                {i.descricao}
                                            </li>
                                        )
                                }
                            </ul>
                        </div>
                    </div>
                </Div>
            </React.Fragment>
        )
    }
}
