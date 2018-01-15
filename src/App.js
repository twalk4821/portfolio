import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Portrait from './components/Portrait';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DownArrow from './components/DownArrow';
import Scroller from './components/Scroller';

import './App.css';

class App extends Component {
  state = {
    showScroller: true,
  };

  showScroller = () => {
    this.setState({ showScroller: true });
  }

  hideScroller = () => {
    this.setState({ showScroller: false });
  }

  render() {
    return (
      <div className="App">
        <Scroller showScroller={this.state.showScroller}/>
        <div className="content">
          <TopBar />
          <Portrait />
          <Welcome />
          <DownArrow />
          <Projects />
          <About />
          <Contact showScroller={this.showScroller} hideScroller={this.hideScroller}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
