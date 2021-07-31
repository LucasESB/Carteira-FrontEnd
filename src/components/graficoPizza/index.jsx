import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

export default class GraficoPizza extends Component {
    render() {
        const data = {
            labels: this.props.data.labels,
            datasets: [{
                data: this.props.data.data,
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)'
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
