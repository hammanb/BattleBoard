import React, { Component } from 'react';
import './styles/App.scss';

import { Header } from './components/header.js';
import { BodyWrapper } from './components/bodywrapper.js';

class BattleBoard extends Component {
  render() {
    return (
      <div className={'h-100 battleapp'}>
        <Header />
        <BodyWrapper />
      </div>
    );
  }
}

export default BattleBoard;
