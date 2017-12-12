import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Portrait from './components/Portrait';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <TopBar />
          <Portrait />
          <Welcome />
          <Projects />
          <About />
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
