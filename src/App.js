import React from 'react';
import Header from './Header.js';
import Main from './Main';
import './App.css';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import data from './data.json';
// import SelectedBeast from './SelectBeast'
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props){
     super(props);
     this.state ={
       showModal:false,
       selectBeast: '',

    }
  }
  // helper functions
handleOnShow = () => {
  this.setState({
    showModal:true,
  });
}
  render() {
    return (
      <>
      <Container >
        <p onClick={this.handleOnShow}>SHow me now est modal</p>
        <Header />
        <Main
         data ={data}/>
        <footer>Susan Hargus</footer>
        {/* <SelectedBeast /> */}
        <Modal show={this.state.showModal} onHide={this.handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>{this.state.selectBeast}</Modal.Title>
        </Modal.Header> */}
      </Modal>
      </Container>
      </>
    );
  }
}

export default App;
