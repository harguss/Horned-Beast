import React from 'react';
import Modal from 'react-bootstrap/Modal';





class SelectBeast extends React.Component {

  render() {
    return (
      <>
       <Modal show={this.state.showModal} onHide={this.handleClose}>
       <Modal.Header closeButton>
         <Modal.Title>{this.state.hornedBeast.title}</Modal.Title>
       </Modal.Header>
      <Modal.Body></Modal.Body>
     </Modal>
     </>
);
  }

}

export default SelectBeast;