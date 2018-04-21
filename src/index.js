import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import Layout from './components/Layout';
import registerServiceWorker from './registerServiceWorker';

const Links = () => (
  <nav>
    <Link to="/">Home</Link><br/>
    <Link to="/about">about</Link><br/>
    <Link to="/contact">contact</Link><br/>
  </nav>
)

ReactDOM.render(
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={() => <h1>home</h1>}/>
      <Route path="/about" render={() => <h1>about</h1>}/>
      <Route path="/contact" render={() => <h1>contact</h1>}/>
    </div>
  </Router>
  , document.getElementById('root')
);

registerServiceWorker();
