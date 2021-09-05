import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import axios from 'axios'
import './App.css'

// Class based component
class App extends Component {
  state = {
    users: [],
    loading: false
  }

  // async componentDidMount() {
  //   this.setState({ loading: true })

  //   try {
  //     const res = await axios.get(
  //       `https://api.github.com/users?client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     )
  //     this.setState({ users: res.data, loading: false })
  //   } catch (error) {
  //     console.log(error)
  //     this.setState({ loading: false })
  //   }
  // }

  // Search Github Users
  searchUsers = async (text) => {
    this.setState({ loading: true })
    try {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      console.log('Preerror', res.data)
      this.setState({ users: res.data.items, loading: false })
    } catch (error) {
      console.log(error)
      this.setState({ loading: false })
    }
  }

  // Clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }

  render() {
    // Destructuring
    const { users, loading } = this.state

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />

          <Users loading={loading} users={users} />
        </div>
      </div>
    )
  }
}

export default App
