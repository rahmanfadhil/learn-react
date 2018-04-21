import React, { Component } from 'react';

import Header from './Header.js';
import Footer from './Footer.js';

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
    return (
      <div>
        <Header title={this.state.title} changeTitle={this.changeTitle.bind(this)} />
        <Footer />
      </div>
    );
  }
}

export default Layout;
