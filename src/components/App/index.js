import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navigation from '../Navigation';
import { withAuthentication } from '../Authentication/Session';
import AppRoutes from './routes';

const App = () => (
  <Router>
    <Navigation />
    <AppRoutes />
  </Router>
);

export default withAuthentication(App);