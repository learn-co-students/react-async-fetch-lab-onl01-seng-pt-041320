// create your App component here
import React, { Component } from 'react';

class App extends Component
{
    componentDidMount()
    {
        const url = "http://api.open-notify.org/astros.json";

        fetch(url)
            .then(resp => resp.json())
            .then(data => console.log(data));
    }

    render()
    {
        return 0;
    }
}

export default App;