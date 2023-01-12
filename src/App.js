import React from 'react';
import Header from './Header.js';
import Main from './Main';
import './App.css';
import './Footer.js';

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Main />
        {/* <Footer/> */}
      </>
    );
  }
}

export default App;
