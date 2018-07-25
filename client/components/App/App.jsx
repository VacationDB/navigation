import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from '../Navigation/Landing/Landing';
import Results from '../Navigation/Results/Results';
import Navbar from '../Navigation/Navbar/Navbar';
import Details from '../../../../listing-details/client/components/App/App';

import styles from './App.css';

const App = () => (
  <Router>
    <div className={styles.searchContainer}>
      <Route exact path="/" component={Landing} />
      <Route
        path="/search/:searchQuery"
        render={props => (
          <div>
            <Navbar {...props} />
            <Results {...props} />
          </div>
        )}
      />
      <Route
        path="/listing/:listingId"
        render={props => (
          <div>
            <Navbar {...props} />
            <Details {...props} />
          </div>
        )}
      />
    </div>
  </Router>
);

module.exports = App;
