import React, { Component } from 'react';

export class Header extends Component {
    render () {
        return (
            <div id='header' className={'navbar-nav'}><h3 className={'navbar-brand'}>RPG BattleBoard</h3></div>
        );
    }
}