import React from 'react'
import ReactDOM from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../styles/index.css'

import Trafficlight from './components/Trafficlight'; // keep this as default

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Trafficlight />
  </React.StrictMode>
);