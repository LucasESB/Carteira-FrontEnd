import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import App from './App/index';
import SignIn from './pages/signin/index';
import Home from './pages/home/index';
import Transacoes from './pages/transacoes/index';
import Contas from './pages/contas/index';
import Categorias from './pages/categorias/index';
import Configuracao from './pages/configuracoes/index';

export const Routes = () =>
    <Switch>
        <PrivateRoute exact path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={() => <h1>Pagina para criar uma nova conta para acessar o sistema.</h1>} />
        <Redirect from="*" to="/" />
    </Switch>

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/signin", state: { from: props.location } }} />
        )
      }
    />
  );

export const RoutesApp = () =>
    <Switch>
        <Route path="/home" component={Home} />
        <Route path="/transacoes" component={Transacoes} />
        <Route path="/contas" component={Contas} />
        <Route path="/categorias" component={Categorias} />
        <Route path="/configuracao" component={Configuracao} />
        <Redirect from="*" to="/home" />
    </Switch>
