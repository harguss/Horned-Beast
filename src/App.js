import React from 'react';
import Header from './Header.js';
import Main from './Main';
import './App.css';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import data from './data.json';
// import SelectedBeast from './SelectBeast'
// import Modal from 'react-bootstrap/Modal';

class App extends React.Component {
  // constructor(props){
  //   // super(props);
  //   this.state ={
  //     // showModal:false,
  //     // selectBeast: '',

  //   }
  // }
  // helper functions

  render() {
    return (
      <>
      <Container >
        <Header />
        <Main
         data ={data}/>
        {/* <SelectedBeast/> */}
        <Footer />
      </Container>
      </>
    );
  }
}

export default App;
