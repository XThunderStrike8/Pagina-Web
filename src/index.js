import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './components/CSS/estilo.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider 
    domain='dev-5f8rbp2fncwsuych.us.auth0.com' 
    clientId='TfRw1JTFSgH1UDzKAkapktwRmlYVzArP' 
    redirectUri='http://localhost:3000/login'>
        <App />
    </Auth0Provider>
);


