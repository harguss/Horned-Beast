import React from "react";
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';




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

  render() {
    console.log('props?', this.props);
    return (
      <>
        <article>
          <h2>{this.props.title}</h2>
          <img src={this.props.image_url} alt={this.props.title} title={this.props.title} />
          <p>{this.props.description}</p>
          <p><Button variant="" onClick={this.handleLikes}>{this.state.likes}Likes!  💟</Button></p>
        </article>
      </>
    )

  }

}

export default HornedBeast;


