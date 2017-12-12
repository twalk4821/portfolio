import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Portrait from './components/Portrait';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Portrait />
        <Welcome />
        <Projects />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
