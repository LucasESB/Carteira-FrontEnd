import React, { Component } from 'react';

import { Div } from './style';
import InserirEditarCategoria from './inserirEditarCategoria/index';
import api from '../../services/api';

export default class Categorias extends Component {
    constructor() {
        super();

        this.state = {
            abrirModal: false,
            listCategorias: []
        }

        this.abrirFecharModal = this.abrirFecharModal.bind(this);
        this.addCategoria = this.addCategoria.bind(this);
        this.inserirEditar = this.inserirEditar.bind(this);
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

    abrirFecharModal() {
        this.setState({ abrirModal: !this.state.abrirModal });
    }

    addCategoria(categoria) {
        const listCategorias = this.state.listCategorias;
        listCategorias.push(categoria);

        this.setState({ listCategorias });
    }

    inserirEditar() {
        return <InserirEditarCategoria
            fecharModal={this.abrirFecharModal}
            addCategoria={this.addCategoria}
        />;
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
                                            <li key={i._id} onClick={this.abrirFecharModal}>
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
