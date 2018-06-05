import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import BattleBoard from './BattleBoard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BattleBoard />, document.getElementById('root'));
registerServiceWorker();
