import React from "react";
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      likes: 0,

    }
  }


  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1,
    })
  }



helpHandleOnShow = () => {
  this.props.handleOnShow(this.props.hornedBeast);
}
  
  render() {
    console.log('props?', this.props);
    return (
      <>
        <article>
        <Card border="primary" style={{ width: '18rem' }}>
            <Card.Img src={this.props.image_url} alt={this.props.title} title={this.props.title} />
            <Card.Body>
              <Card.Title onClick={this.helpHandleOnShow}>{this.props.title}</Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
              <Button variant="" onClick={this.handleLikes}>{this.state.likes} Likes!  💟</Button>
          </Card.Body>
        
         </Card>
       </article>
      </>
    );
  }
    
}
      



export default HornedBeast;
