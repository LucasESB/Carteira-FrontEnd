import './Nav.css';
import { Component } from 'react';

import NavItem from '../navItem/NavItem';

import Home from '../../../assets/icons/Home.svg';
import Transacoes from '../../../assets/icons/Transacoes.svg';
import Contas from '../../../assets/icons/Contas.svg';
import Categorias from '../../../assets/icons/Categorias.svg';
import Configuracoes from '../../../assets/icons/Configuracoes.svg';

export class Nav extends Component {
  render() {
    return (
      <aside className="menuArea">
        <div className="areaUsuario">
          <div></div>
          <span>Lucas Eduardo</span>
        </div>

        <nav className="menu">
          <NavItem url="/" img={Home} descricao="Home" />
          <NavItem url="/transacoes" img={Transacoes} descricao="Transações" />
          <NavItem url="/contas" img={Contas} descricao="Contas" />
          <NavItem url="/categorias" img={Categorias} descricao="Categorias" />
          <NavItem url="/configuracoes" img={Configuracoes} descricao="Configurações" />
        </nav>
      </aside>
    );
  }
}