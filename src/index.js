import React from 'react';
import { render } from 'react-dom';
import App from './app/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
     registration.unregister()
} })

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);