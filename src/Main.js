import React from "react";
import HornedBeast from './HornedBeast';
import data from './data.json';
import './Main.css';
// import { Grid, Row, Col } from 'react-bootstrap';





class Main extends React.Component {












  render() {
    console.log('data? :', data);

    let hornedbeast = [];

    data.forEach((newHornedbeast, index) => {
      hornedbeast.push(
        <HornedBeast
          title={newHornedbeast.title}
          image_url={newHornedbeast.image_url}
          description={newHornedbeast.description}
          key={index}
        />);
    });
    console.log('data component', hornedbeast)
      
    return (
      <>
      {/* <Container> */}
        {/* <Row xs={2} sm={3} md={4} lg={5}> */}
      {/* < main > */}
        
        {hornedbeast}

      {/* </main> */}
      {/* </Row> */}
      {/* </Container> */}
      </>



    )
  }
}

export default Main;

