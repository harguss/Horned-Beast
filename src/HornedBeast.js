import React from "react";
import './HornedBeast.css';




class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count likes
      likes: 0,
    }
  }
  handleLikes = () => {
this.setState({
  likes:this.state.likes + 1,
})
  }

  render() {
    console.log('props?', this.props);
    return (
      <>
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt={this.props.title} title={this.props.title} />
        <p>{this.props.description}</p>
        <p>{this.state.likes}Likes!</p>
        <p onClick={this.handleLikes}>Click to like this Beast</p>

      </>
    )

  }
}

export default HornedBeast;


