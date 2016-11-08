import React from 'react';

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div>
      Name : <span>{this.props.likeDetails.name}</span>
      Age : <span>{this.props.likeDetails.age}</span>
      Address : <span>{this.props.likeDetails.address}</span>
        Likes : <span>{this.state.likesCount}</span>
        Likes Total : <span>{this.props.totalLikes}</span>
        <div><button onClick={this.onLike}>Like Me okay</button></div>
      </div>
    );
  }

}

export default AwesomeComponent;
