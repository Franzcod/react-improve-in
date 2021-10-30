import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import {Auth0Provider} from "@auth0/auth0-react"
import {Provider} from 'react-redux'
import store  from './redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
   <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider 
        domain='dev-56uvoomy.us.auth0.com' 
        clientId='2Bns1tXZZRzywBv6OEXZWYNF09628lQR' 
        redirectUri={window.location.origin}
      >
        <App/>
      </Auth0Provider>
    </BrowserRouter>
   </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
