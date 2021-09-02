import React, { Component } from 'react'

export class Search extends Component {
  // When we have a form in react usually
  // we're going to want to attach state

  state = {
    text: ''
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.text)
  }

  // Brackets to use this as a key
  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    )
  }
}

export default Search