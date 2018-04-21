import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Layout from './components/Layout';
import registerServiceWorker from './registerServiceWorker';

const Links = () => (
  <nav>
    <Link to="/">home</Link><br/>
    <Link to="/about">about</Link><br/>
    <Link to="/contact">contact</Link><br/>
  </nav>
)

ReactDOM.render(
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={() => <Layout content="Home"/>} />
      <Route path="/about" render={() => <Layout content="About"/>} />
      <Route path="/contact" render={() => <Layout content="Contact"/>} />
    </div>
  </Router>
  , document.getElementById('root')
);

registerServiceWorker();
