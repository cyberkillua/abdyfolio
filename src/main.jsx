import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/main.scss'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from './state/store.js';
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>

  </React.StrictMode >,
)
