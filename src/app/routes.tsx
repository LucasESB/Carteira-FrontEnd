import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import { Home } from '../components/pages/home/Home';
import { Transacoes } from '../components/pages/transacoes/Transacoes';
import { Contas } from '../components/pages/contas/Contas';
import { Categorias } from '../components/pages/categorias/Categorias';
import { Configuracoes } from '../components/pages/configuracoes/Configuracoes';


function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/transacoes" exact component={Transacoes} />
            <Route path="/contas" exact component={Contas} />
            <Route path="/categorias" exact component={Categorias} />
            <Route path="/configuracoes" exact component={Configuracoes} />
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export default Routes;