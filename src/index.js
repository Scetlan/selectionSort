import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const arrayNumber = [2, 4, 6, 8, 3, 1, -9, 5];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App arrayNumber={arrayNumber} />);
