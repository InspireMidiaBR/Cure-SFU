import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Verifica se o ambiente é o navegador antes de executar o código que depende do document
if (typeof document !== 'undefined') {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root'),
    );
}
