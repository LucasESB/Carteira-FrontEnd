import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/home/index';
import Transacoes from './pages/transacoes/index';
import Contas from './pages/contas/index';
import Categorias from './pages/categorias/index';
import Configuracao from './pages/configuracoes/index';

const Routes = () =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/transacoes" component={Transacoes} />
        <Route exact path="/contas" component={Contas} />
        <Route exact path="/categorias" component={Categorias} />
        <Route exact path="/configuracao" component={Configuracao} />
        <Redirect from="*" to="/" />
    </Switch>

export default Routes;