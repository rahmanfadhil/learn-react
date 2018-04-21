import React, { Component } from 'react';

import Title from './header/Title'

class Header extends Component {
  handleChange() {
    this.props.changeTitle("heloo")
  }

  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <button onClick={this.handleChange.bind(this)}>Change Title</button>
      </div>
    );
  }
}

export default Header;
