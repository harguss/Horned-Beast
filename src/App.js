import React from 'react';
import Header from './Header.js';
import Main from './Main';
import './App.css';
// import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import data from './data.json';
import './SelectBeast'
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props){
     super(props);
     this.state ={
       showModal: false,
       selectHornedBeast: {
        title: '',
        image: '',
        description: ''
       },

    }
  }
  // helper functions
handleOnShow = (beastData) => {
  console.log(beastData);
  this.setState({
    showModal:true,
    selectHornedBeast: beastData
  });

}

handleClose = () => {
  this.setState({
    showModal:false,
  })
 
}
  render() {
    return (
      <>
      <Container >
        {/* <p onClick={this.handleOnShow}>SHow me now esta modal</p> */}
        <Header />
        <Main
         data ={data}
         handleOnShow={this.handleOnShow}/>
        <footer>Susan Hargus</footer>
        {/* <SelectedBeast /> */}
      </Container>
      <Modal show={this.state.showModal} onHide={this.handleClose}>
        <Modal.Header closeButton >
          <Modal.Title>{this.state.selectHornedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{this.state.selectHornedBeast.description}</p>
          <image scr={this.state.selectHornedBeast.image_url}/>
        </Modal.Body>
      </Modal>
      </>
    );
  }
}

export default App;
