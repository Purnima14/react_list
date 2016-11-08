import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {hide : false};
}

showLikes(){
  this.setState({
     hide: !this.state.hide
  })
}
  render () {
  var indents = [];
for (var i = 0; i < 5000; i++) {
  indents.push(<AwesomeComponent key={i} totalLikes={i} likeDetails={{
  name: "Test" + i,
  age: i,
  address: i + "Add" + i
  }}/>);
}
    return (
    <div>
    <button onClick={this.showLikes.bind(this)}> Show Likes </button>
    <p> Hello React!</p>
    <div style={{
    maxHeight: "500px",
    overflowY: "scroll",
    backgroundColor: "#9933ff"
    }}>
{this.state.hide ? indents : null}
    </div>
    </div>);
  }
}

render(<App/>, document.getElementById('app'));
