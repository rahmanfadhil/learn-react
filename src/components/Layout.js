import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

class Layout extends Component {
  constructor() {
    super()
    this.state = {
      title: "Welcome"
    }
  }

  changeTitle(title) {
    this.setState({ title })
  }

  render() {
    const Links = () => (
      <nav>
        <Link to="/">home</Link> | <Link to="/about">about</Link> | <Link to="/contact">contact</Link>
      </nav>
    )
    return (
      <Router>
        <div>
          <Links />
          <Header title={this.state.title} changeTitle={this.changeTitle.bind(this)} />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Layout;
