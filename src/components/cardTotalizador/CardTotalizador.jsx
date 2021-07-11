import './CardTotalizador.css'
import { Component } from "react";

import { formatarNumberEmReal } from '../../utils/number';

export default class CardTotalizador extends Component {
    render() {
        const valor = formatarNumberEmReal(this.props.valor);

        return (
            <div className="card cardTotalizdor">
                <span>{this.props.label}</span>
                <strong>{`R$ ${valor}`}</strong>
            </div>
        );
    }
}