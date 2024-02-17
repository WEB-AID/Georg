import React, { Component } from 'react';
import './App.css';
import Header from '../header/Header';
import Main from '../main/Main';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAtTop: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      return;
    }
  
    const isAtTop = window.scrollY === 0;
  
    if (isAtTop) {
      this.setState(() => { 
        return {isAtTop} 
      });
    } else if (this.state.isAtTop && !isAtTop) {
      this.setState(() => { 
        return {isAtTop} 
      });
      window.scrollTo({ top: window.innerHeight - 100, behavior: 'smooth' });
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <footer className="footer"></footer>
      </div>
    );
  }
}