import React from 'react';
import ReactDOM from 'react-dom';
import BattleBoard from './BattleBoard';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css';

ReactDOM.render(<BattleBoard />, document.getElementById('root'));
registerServiceWorker();
