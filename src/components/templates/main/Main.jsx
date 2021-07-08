import './Main.css';
import { Component } from 'react';

export class Main extends Component {
  render() {
    return (
      <main className="content">
        {this.props.children}
      </main>
    );
  }
}