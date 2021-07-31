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
            <Div className={this.props.className}>
                <select
                    {...this.props}
                    placeholder=" "
                    onChange={this.handleChange}>

                    <option default value=""></option>

                    {this.props.data.map(item =>
                        <option key={item._id} value={item._id}>
                            {item.descricao}
                        </option>)}
                </select>
                <label>{this.props.label}</label>
            </Div>
        )
    }
}
