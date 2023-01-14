import React from 'react';
import Header from './Header.js';
import Main from './Main';
import './App.css';
import './Footer';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';

class App extends React.Component {

  render() {
    return (
      <>
      <Container >
        <Header />
        <Main/>
        <Footer />
      </Container>
      </>
    );
  }
}

export default App;
