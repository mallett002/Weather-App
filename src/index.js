import React from 'react';
import { render } from 'react-dom';
import App from './app/App';
import './index.css';
import { HashRouter } from 'react-router-dom';

navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
     registration.unregister()
} })

render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
);