// create your App component here
import React, { Component } from 'react';

class App extends Component
{
    state =
    {
        peopleInSpace: []
    }

    componentDidMount()
    {
        const url = "http://api.open-notify.org/astros.json";

        fetch(url)
            .then(resp => resp.json())
            .then(({people}) => this.setState({peopleInSpace: people}));
    }

    render()
    {
        return (
            <div>
                {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
            </div>
        );
    }
}

export default App;