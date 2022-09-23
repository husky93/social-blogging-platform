import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Post from './pages/Post';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
