import './App.css';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Nav } from '../components/templates/nav/Nav';
import { Main } from '../components/templates/main/Main';
import Routes from './routes';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Nav />
          <Main>
            <Routes />
          </Main>
        </div>
      </BrowserRouter>
    );
  }
}