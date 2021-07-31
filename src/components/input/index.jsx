import React, { Component } from 'react';

import { Div } from './style';
import { formatarNumberEmReal } from '../../utils/number';

export default class Input extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    getType() {
        if (this.props.type === "formatNumber") return "text";
        else return this.props.type;
    }

    handleChange(e) {
        if (this.props.type === "formatNumber") this.formatarNumeroInput(e);
        this.props.onChange(e);
    }

    formatarNumeroInput(event) {
        if (event.nativeEvent.data != null) {

            if (event.nativeEvent.data.trim().length <= 0) {
                event.target.value = event.target.value.substring(0, (event.target.value.length - 1));
                return;
            }
            else if (isNaN(event.nativeEvent.data.trim())) {
                event.target.value = event.target.value.substring(0, (event.target.value.length - 1));
                return;
            }

            var valor = null;

            if (event.target.value.length === 1) {
                valor = Number.parseFloat('0.0' + event.nativeEvent.data);
            } else {
                valor = this.movervirgula(1, event.target.value);
            }

            event.target.value = formatarNumberEmReal(valor);
        }
        else {
            const valor = this.movervirgula(0, event.target.value);
            event.target.value = formatarNumberEmReal(valor);
        }
    }

    /**
     * Metodo responsavel por morver a virgula de um numero
     * 
     * @param {Number} direcao : 0 => Esquerda, 1 => direita 
     * @param {String} valor : valor formatado em real
     * @return Number
     */
    movervirgula(direcao, valor) {
        valor = valor.replaceAll('.', '');
        valor = valor.replaceAll(',', '.');

        var indicePonto = valor.lastIndexOf('.');

        valor = valor.substring(0, indicePonto) + valor.substring(indicePonto + 1);

        if (direcao === 0) indicePonto -= 1;
        else indicePonto += 1;

        valor = valor.substring(0, indicePonto) + '.' + valor.substring(indicePonto);

        return Number.parseFloat(valor);
    }

    render() {
        return (
            <Div className={this.props.className}>
                <input
                    {...this.props}
                    type={this.getType()}
                    placeholder=" "
                    onChange={this.handleChange}
                />
                <label>{this.props.label}</label>
            </Div>
        )
    }
}
