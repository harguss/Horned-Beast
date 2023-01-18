import React from "react";
import HornedBeast from './HornedBeast';

import './Main.css';
import { Row } from 'react-bootstrap';

class Main extends React.Component {

  render() {
    // console.log('data? :', data);

    console.log('props', this.props);

    return (
      <>
     
     <Row xs={2} sm={3} md={4} lg={5}>
        {this.props.data.map((newHornedbeast, index) => (
            <HornedBeast
              title={newHornedbeast.title}
              image_url={newHornedbeast.image_url}
              description={newHornedbeast.description}
              key={index}
              handleOnShow={this.props.handleOnShow}
              />
    ))}
          </Row>
    
      </>



    );
  }
}

export default Main;

