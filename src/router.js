import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// components
import App from './components/App/App';
import LandingPage from './components/LandingPage/LandingPage';

export default (
  <BrowserRouter>
    <App>
        <Route exact={true} component={LandingPage} path="/"></Route>
    </App>
  </BrowserRouter>
);