import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';
import AppNavigation from '../components/AppNavigation';
import AppFoot from '../components/Footer'

const App = ({ children }) => (
  <div>
    <AppNavigation />
    <Grid>
      { children }
    </Grid>
    <AppFoot/>
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
