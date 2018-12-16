import React, { Component } from 'react'
import Person from './components/Person'

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        people: json.people
      })
    })
  }

  render() {
    let list = this.state.people.map((person) => {
      return <Person key={person.name} person={person}/>
    })

    return (
      <div>
      <h1>People</h1>
      <div>{list}</div>
      </div>
    )
  }
}

export default App
