import React from 'react';
import Header from './Header.js';
import Main from './Main';
import './App.css';
// import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import data from './data.json';
import './SelectBeast'
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props){
     super(props);
     this.state ={
       showModal:false,
       selectHornedBeast: '',

    }
  }
  // helper functions
handleOnShow = (hornedBeast) => {
  this.setState({
    showModal:true,
    selectBeast: hornedBeast
  });
}
  render() {
    return (
      <>
      <Container >
        {/* <p onClick={this.handleOnShow}>SHow me now est modal</p> */}
        <Header />
        <Main
         data ={data}
         handleOnShow={this.handleOnShow}/>
        <footer>Susan Hargus</footer>
        {/* <SelectedBeast /> */}
      </Container>
      </>
    );
  }
}

export default App;
