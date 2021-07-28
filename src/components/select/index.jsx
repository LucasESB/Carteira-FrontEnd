import React, { Component } from 'react';

import { Div } from './style';

export default class Select extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e);
    }

    render() {
        return (
            <Div>
                <select {...this.props} onChange={this.handleChange}>
                    {this.props.data.map(item =>
                        <option key={item._id} value={item.descricao}>
                            {item.descricao}
                        </option>)}
                </select>
                <label>{this.props.label}</label>
            </Div>
        )
    }
}
