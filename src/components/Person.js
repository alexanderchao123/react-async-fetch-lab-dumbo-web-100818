import React, { Component } from 'react'

class Person extends Component {
  render() {
    return(
      <div>
        <h1>Name: {this.props.person.name}</h1>
        <h1>Craft: {this.props.person.craft}</h1>
      </div>
    )
  }
}

export default Person
