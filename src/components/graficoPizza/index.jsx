import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

export default class GraficoPizza extends Component {
    render() {
        const data = {
            labels: this.props.data.labels,
            datasets: [{
                data: this.props.data.data,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }]
        }

        return (
            <Pie
                className={this.props.className}
                data={data}
                options={this.props.options}
            />
        )
    }
}
