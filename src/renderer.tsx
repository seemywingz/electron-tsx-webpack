import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/components/App';
import pjson from '../package.json';

document.title = pjson.name + " " + pjson.version
ReactDOM.render(<App />, document.getElementById('app'));