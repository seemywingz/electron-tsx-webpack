import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/components/App';
var pjson = require('../package.json');

document.title = pjson.name + " " + pjson.version
ReactDOM.render(<App />, document.getElementById('app'));