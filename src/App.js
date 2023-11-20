import React from 'react';
import './App.css';
import logo from './toxoAI.png';
import DALLE from './DALLE.png';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <div className="nav-links">
          <a href="#our-approach">Our approach</a>
          <a href="#why-us">Why us?</a>
        </div>
        <div className="nav-logo">
          <img src={logo} alt="Toxo AI Logo" className="logo" />
        </div>
        <div className="nav-button">
          <button className="contact-button">Contact Us!</button>
        </div>
      </nav>

      <div className="background-text">Toxo<br/>AI</div>

      <header className="App-header">
        <div className="content-container">
          <div className="title-container">
            <h1 className="title">Meet innovative<br/>testing solution</h1>
            <p className="mission-statement">
              Our mission is to replace costly and ethically challenging animal testing with state-of-the-art machine learning solutions, offering more accurate and humane alternatives for chemical safety assessments.
            </p>
          </div>
          <img src={DALLE} alt="AI Illustration" className="ai-illustration" />
        </div>
        <span className="subtitle">Say yes to humane testing</span>
      </header>

      <footer className="App-footer">
        The Future of Testing: Ethical, Accurate, Machine-Learned
      </footer>
    </div>
  );
}

export default App;
