import './GraficoPizza.css'
import { Component } from "react";
import { Pie } from 'react-chartjs-2';

export default class GraficoPizza extends Component {
    render() {
        return (
            <div className={this.props.className ? this.props.className : ''}>
                <Pie
                    height={this.props.height ? this.props.height : 100}
                    width={this.props.width ? this.props.width : 100}
                    data={this.props.data ? this.props.data : {}}
                    options={this.props.options ? this.props.options : {}}
                />
            </div>
        );
    }
}