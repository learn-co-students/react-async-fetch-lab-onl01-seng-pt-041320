import React, { Component } from 'react';

export default class App extends Component {

  state = {
    people: []
  }

  render() {
    return(
      <div>
      <h1> ASTROS!</h1>
      {this.state.people.map(person => person)}
      </div>
    )
  }

  componentDidMount() {
    fetch( 'http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(({people}) => this.setState({people}))
  }
}
