import React              from 'react';
import {ToastContainer}   from 'react-toastify';
import {Provider}         from 'react-redux';
import {Router}           from 'react-router-dom';
import './config/ReactotronConfig';
import Routes             from './routes';
import history            from  './services/history';
import GlobalStyle        from './styles/global';
import store              from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
