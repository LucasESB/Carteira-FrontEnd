import React, { Component } from 'react';

import { Div } from './style';
import { formatarNumberEmReal } from '../../utils/number';

export default class Transacoes extends Component {
    constructor() {
        super();

        this.state = {
            valor: '0,00',
            conta: '',
            categoria: '',
            descricao: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        const name = target.name;

        if (event.target.id === "valor") {
            var v = value.replaceAll('.', '');
            v = v.replaceAll(',', '.');

            var indicePonto = v.lastIndexOf('.');

            v = v.substring(0, indicePonto) + v.substring(indicePonto + 1);

            indicePonto += 1;

            v = v.substring(0, indicePonto) + '.' + v.substring(indicePonto);

            value = formatarNumberEmReal(Number.parseFloat(v));
            console.log(value);
        }

        this.setState({
            [name]: value
        });
    }

    async onSubmit(event) {
        event.preventDefault();

        alert("oii")
    }

    render() {
        return (
            <Div>
                <form onSubmit={this.onSubmit}>
                    <label>
                        <span>Valor:</span>
                        <input id="valor" type="text" name="valor" value={this.state.valor}
                            onChange={this.handleInputChange} />
                    </label>

                    <label>
                        <span>Conta:</span>
                        <input type="text" name="conta" value={this.state.conta}
                            onChange={this.handleInputChange} />
                    </label>

                    <label>
                        <span>Categoria:</span>
                        <input type="text" name="categoria" value={this.state.categoria}
                            onChange={this.handleInputChange} />
                    </label>

                    <label>
                        <span>Descrição:</span>
                        <input type="text" name="descricao" value={this.state.descricao}
                            onChange={this.handleInputChange} />
                    </label>

                    <button type="submit">Enviar</button>
                </form>
            </Div>
        )
    }
}
