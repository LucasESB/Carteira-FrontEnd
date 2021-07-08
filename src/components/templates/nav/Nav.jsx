import './Nav.css';
import { Component } from 'react';

import NavItem from '../navItem/NavItem';

import Home from '../../../assets/icons/Home.svg';
import HomeSelecionado from '../../../assets/icons/HomeSelecionado.svg';
import Transacoes from '../../../assets/icons/Transacoes.svg';
import TransacoesSelecionado from '../../../assets/icons/TransacoesSelecionado.svg';
import Contas from '../../../assets/icons/Contas.svg';
import ContasSelecionado from '../../../assets/icons/ContasSelecionado.svg';
import Categorias from '../../../assets/icons/Categorias.svg';
import CategoriasSelecionado from '../../../assets/icons/CategoriasSelecionado.svg';
import Configuracoes from '../../../assets/icons/Configuracoes.svg';
import ConfiguracoesSelecionado from '../../../assets/icons/ConfiguracoesSelecionado.svg';

export class Nav extends Component {
  constructor() {
    super();

    this.state = { activeItem: 'Home' }

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick({ descricao }) {
    this.setState({ activeItem: descricao });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <aside className="menuArea">
        <div className="areaUsuario">
          <div></div>
          <span>Lucas Eduardo</span>
        </div>

        <nav className="menu">
          <NavItem url="/"
            img={Home} imgSelecionado={HomeSelecionado} descricao="Home"
            ativado={activeItem === "Home"} onClick={this.handleItemClick} />

          <NavItem url="/transacoes"
            img={Transacoes} imgSelecionado={TransacoesSelecionado} descricao="Transações"
            ativado={activeItem === "Transações"} onClick={this.handleItemClick} />

          <NavItem url="/contas"
            img={Contas} imgSelecionado={ContasSelecionado} descricao="Contas"
            ativado={activeItem === "Contas"} onClick={this.handleItemClick} />

          <NavItem url="/categorias"
            img={Categorias} imgSelecionado={CategoriasSelecionado} descricao="Categorias"
            ativado={activeItem === "Categorias"} onClick={this.handleItemClick} />

          <NavItem url="/configuracoes"
            img={Configuracoes} imgSelecionado={ConfiguracoesSelecionado} descricao="Configurações"
            ativado={activeItem === "Configurações"} onClick={this.handleItemClick} />
        </nav>
      </aside>
    );
  }
}