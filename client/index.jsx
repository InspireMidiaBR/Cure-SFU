import React from 'react';
import ReactDOM from 'react-dom/server';
import App from './App.jsx';

ReactDOM.hydrateRoot(
    document.getElementById('root'),
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
