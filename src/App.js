import React, { Component } from 'react';

import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Form from './components/Form';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Hero />
        <About />
        <Form />
      </div>
    );
  }
}
