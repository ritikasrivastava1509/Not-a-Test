import React, { Component } from 'react'
class Welcome extends Component {
  render() {
    console.log(this.props.data.name)
    const auth = this.props.data.name

    var pageTitle = `Welcome, ` + auth

    return <h1>{pageTitle}</h1>
  }
}

export default Welcome
