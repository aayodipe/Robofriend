import React from 'react';
import ReactDOM from 'react-dom';
import serviceWorker from './serviceWorker'
import './index.css';
import Cardlist from './Cardlist';
import { robots } from './robots';
import 'tachyons';


ReactDOM.render(<Cardlist robots = {robots}/>, document.getElementById('root'));