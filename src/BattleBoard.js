import React, { Component } from 'react';
import { Header } from './components/header.js';
import { BodyWrapper } from './components/bodywrapper.js';

class BattleBoard extends Component {
  render() {
    return (
      <div id={'battleboard'} className={'h-100 battleboard'}>
        <Header />
        <BodyWrapper />
      </div>
    );
  }
}

export default BattleBoard;
