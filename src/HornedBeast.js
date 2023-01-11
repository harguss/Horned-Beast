import React from "react";
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';




class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count likes
      likes: 0,

      // hbNeeded = () => {
      //   this.setState({
      //     hbNeeded: true,
      //   });
      // }

      // hbGot = () => {
      //   this.setState({
      //     hbNeeded: false,
      //   });
      // }
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
        <p>{this.state.likes}Likes!</p>
        <p onClick={this.handleLikes}>Click to like this Beast</p>

       
        <Button variant="primary" onClick={this.likes} className="buttonMargin">LIKE it!</Button>
       
        </article>
      </>
    )

  }
}

export default HornedBeast;


