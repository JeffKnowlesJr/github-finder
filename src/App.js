import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
import './App.css'

// Class based component
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <h1>Hello from React</h1>
      </div>
    )
  }
}

export default App
