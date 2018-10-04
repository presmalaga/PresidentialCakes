import React, { Component } from 'react';
import Navbar from './navbar';
import Middle from './middle';
import Images from './images';
import Footer from './footer';

export default class Home extends Component {
  render() {
    return (
      <div id="header">
        <header className="head">

        </header>
        <Navbar />
        <Middle />
        <Images />
        <Footer />
      </div>

    );
  }
}
