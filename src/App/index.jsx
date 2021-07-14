import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Roustes from '../routes';
import { Sidebar } from '../components/templates/sidebar/index';
import Main from '../components/templates/main/index';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Sidebar />
        <Main>
          <Roustes />
        </Main>
      </BrowserRouter>
    )
  }
}

