import React from "react";
import HornedBeast from './HornedBeast';

import './Main.css';
import { Row } from 'react-bootstrap';

class Main extends React.Component {

  handleShow = (beastData) => {
    console.log(beastData)
   this.props.handleOnShow(beastData);
  }

  render() {
    console.log('sorted- data: ', this.props.sortedData);

   
    

    return (
      <>
     
     <Row xs={2} sm={3} md={4} lg={5}>
        {this.props.sortedData.map((newHornedbeast, index) => (
            <HornedBeast
              title={newHornedbeast.title}
              image_url={newHornedbeast.image_url}
              description={newHornedbeast.description}
              key={index}
              handleOnShow={this.handleShow}
              />
    ))}
          </Row>
    
      </>



    );
  }
}

export default Main;

