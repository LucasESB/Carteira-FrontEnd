import React, { Component } from 'react';

import { Div } from './style';
import api from '../../services/api';
import { login } from '../../services/auth';

export default class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            usuario: '',
            senha: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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

        const { usuario, senha } = this.state;

        try {
            const response = await api.post("login", { nome: usuario, senha: senha });

            login(response.data.documentos[0].token);

            this.props.history.push("/")
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <Div>
                <form onSubmit={this.onSubmit}>
                    <label>
                        <span>Usuario:</span>
                        <input type="text" name="usuario" value={this.state.usuario} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        <span>Senha:</span>
                        <input type="password" name="senha" value={this.state.senha} onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Enviar" />
                </form>
            </Div>
        )
    }
}
