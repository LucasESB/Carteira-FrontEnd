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

            if (event.nativeEvent.data.trim().length <= 0) return;
            else if (isNaN(event.nativeEvent.data.trim())) return;

            var v = event.target.value.replaceAll('.', '');
            v = v.replaceAll(',', '.');

            var indicePonto = v.lastIndexOf('.');

            v = v.substring(0, indicePonto) + v.substring(indicePonto + 1);

            indicePonto += 1;

            v = v.substring(0, indicePonto) + '.' + v.substring(indicePonto);

            event.target.value = formatarNumberEmReal(Number.parseFloat(v));
        }
    }

    render() {
        return (
            <Div>
                <input
                    {...this.props}
                    type={this.getType()}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.handleChange}
                />
                <label>{this.props.label}</label>
            </Div>
        )
    }
}
