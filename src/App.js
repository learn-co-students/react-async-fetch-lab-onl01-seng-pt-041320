// create your App component here
import React, { Component } from 'react'

class App extends Component {

    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then(res => res.json())
            .then(({people}) => 
                this.setState({ peopleInSpace: people }))
        }  

    render() {
        return (
            <div>
                {this.state.peopleInSpace.map((person, id) =>  <li key={id}>{person.name}</li>)}
             </div>
           )
        }
    }



export default App