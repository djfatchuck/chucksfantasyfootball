import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App {...{context: window.props}}/>, document.getElementById('root'));
