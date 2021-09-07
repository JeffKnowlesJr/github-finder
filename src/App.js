import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import About from './components/pages/About'
import axios from 'axios'
import './App.css'

// Class based component
class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
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
      this.setState({ users: res.data.items, loading: false })
    } catch (error) {
      console.log(error)
      this.setState({ loading: false })
    }
  }

  // Get single Github User
  getUser = async (username) => {
    this.setState({ loading: true })

    try {
      const res = await axios.get(
        `https://api.github.com/users/${username}?client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      this.setState({ user: res.data, loading: false })
    } catch (error) {
      console.log(error)
      this.setState({ loading: false })
    }
  }

  // Get user repos
  getUserRepos = async (username) => {
    this.setState({ loading: true })

    try {
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      this.setState({ repos: res.data, loading: false })
    } catch (error) {
      console.log(error)
      this.setState({ loading: false })
    }
  }

  // Clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }

  // Set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })

    setTimeout(() => {
      this.setState({ alert: null })
    }, 5000)
  }

  render() {
    // Destructuring
    const { users, loading, alert, user, repos } = this.state

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    {' '}
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <Fragment>
                    <User
                      {...props}
                      getUser={this.getUser}
                      getUserRepos={this.getUserRepos}
                      user={user}
                      repos={repos}
                      loading={loading}
                    />
                  </Fragment>
                )}
              />
              <Route exact path="/about" render={About} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
