import React from 'react';
import Header from './Header.js';
import Main from './Main';
import './App.css';
// import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import data from './data.json';
import './SelectBeast'
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  // this is from demo
// constructor(props) {
//   super(props);
//   this.state = {
//     userName: "",
//     howToSort: "",
//     sortedData: data,
//   }
// }



//   handleSubmit = (event) => {
//   event.preventDefault();
//   let userName = event.target.userName.value;
//   console.log(userName);
//   this.setState({
//   userName: userName,
//   });
//   console.log('user in state?', this.state.userName);
//   };

//   handleInput = (event) => {
//     let userName = event.target.value;
//     console.log("userName", userName);
//     this.setState({
//       userName: userName,
//     });
//     }
//   handleSelect = (event) => {
//     let selected = event.target.value;
//     console.log("selected", selected);

// if (selected === 'one'){
//   let newData = data.filter((value) => value === 1);
//   this.set.State({sortedData: newData});

// } else if (selected === 'two'){
//   let newData = data.filter((value) => value  === 2);
//   this.set.State({sortedData: newData})

// } else if (selected === 'three'){
//     let newData = data.filter((value) => value  === 3);
//     this.set.State({sortedData: newData})

// } else (selected === 'all'){
//   this.set.State({sortedData: data})

// }

//     }
//   }
 constructor(props){
     super(props);
     this.state = {
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

        <Header />
        <Main
        //  data ={this.state.sortedData}
         data = {data}
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
          <Image src={this.state.selectHornedBeast.image}/>
        </Modal.Body>
      </Modal>
{/* ////////////////////////////////////////////// */}
      <Form onSubmit={this.handleSubmit}>
        <Form.Label>
          {/* <input type="text" name="userName" onInput={this.handleInput}/> */}
          
            <legend>Gallery of Horns</legend>
            <Form.Select name="selected" onChange={this.handleSelect}>
            <option value="all">All</option>
            <option value="one">One Horn</option>
            <option value="two">Two Horns</option>
            <option value="three">Three Horns</option>
            </Form.Select>
          
          
          <Button type='submit'>submit</Button>
        </Form.Label>
      </Form>
      </>
    );
  }
}

export default App;
