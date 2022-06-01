import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css'
import 'antd/dist/antd.css';
import 'leaflet/dist/leaflet.css';

import App from './App';

import store from './store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>

);

