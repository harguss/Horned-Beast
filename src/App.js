import React from "react";
import Header from "./Header.js";
import Main from "./Main";
import "./App.css";
// import Footer from './Footer';
import Container from "react-bootstrap/Container";
import data from "./data.json";
import "./SelectBeast";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectHornedBeast: {
        title: "",
        image: "",
        description: "",
      },
      sortedData: data,
    };
  }

  handleSelect = (event) => {
    let selected = parseInt(event.target.value);
    // console.log("🚀 ~ file: App.js:30 ~ App ~ selected", selected);
    // console.log("selected", selected);

    if (selected === 1) {
      let newData = data.filter((beastObject) => beastObject.horns === 1);
      // console.log("🚀 ~ file: App.js:35 ~ App ~ newData", newData);
      
      this.setState({ sortedData: newData });
    // } 
     //else if (selected === "two") {
    //   let newData = data.filter((value) => value === 2);
    //   this.set.State({ sortedData: newData });
    // } else if (selected === "three") {
    //   let newData = data.filter((value) => value === 3);
    //   this.set.State({ sortedData: newData });
    } else {
      this.setState({ sortedData: data });
    }
  };

  // helper functions
  handleOnShow = (beastData) => {
    console.log(beastData);
    this.setState({
      showModal: true,
      selectHornedBeast: beastData,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <>
        <Container>
          <Header />
          <Main
            sortedData = {this.state.sortedData}
            // data={data}
            handleOnShow={this.handleOnShow}
          />
          <footer>Susan Hargus</footer>
          {/* <SelectedBeast /> */}
        </Container>
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectHornedBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.state.selectHornedBeast.description}</p>
            <Image src={this.state.selectHornedBeast.image} />
          </Modal.Body>
        </Modal>

        <Form onSubmit={this.handleSubmit}>
          <Form.Label>
            <legend>Gallery of Horns</legend>
            <Form.Select name="selected" onChange={this.handleSelect}>
              <option value="all">All</option>
              <option value="1">One Horn</option>
              <option value="2">Two Horns</option>
              <option value="3">Three Horns</option>
              <option value="100">100 Horns</option>
            </Form.Select>

            <Button type="submit">submit</Button>
          </Form.Label>
        </Form>
      </>
    );
  }
}

export default App;
