import './NavItem.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavItem extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.onClick(this.props);
    }

    render() {
        return (
            <Link to={this.props.url} className={`menuItem ${this.props.ativado ? 'menuItemAtivado' : ''}`} onClick={this.onClick}>
                <img src={this.props.ativado ? this.props.imgSelecionado : this.props.img } alt="" />
                {this.props.descricao}
            </Link>
        );
    }
}