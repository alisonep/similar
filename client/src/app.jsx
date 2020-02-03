import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {url:'', name:''};

    this.setUrl = this.setUrl.bind(this);

    this.setUrl();
  }

  setUrl() {
    var that = this;
    $.ajax({
      method:'GET',
      url: 'http://localhost:3001/url/' + that.props.id
    }).done(function(data){
      that.setState({
        url: data,
        name: 'Dog'
      })
    })
  }

  render() {
    return (
      <div>
        <img src = {this.state.url}></img>
        <div id = 'name'>{this.state.name}</div>
      </div>
    )
  }
}

ReactDOM.render(
  <App id = '1'/>, document.getElementById('similarContainer')
)