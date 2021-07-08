import './NavItem.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavItem extends Component {
    render() {
        return (
            <Link to={this.props.url} className="menuItem">
                <img src={this.props.img} alt="" />
                {this.props.descricao}
            </Link>
        );
    }
}