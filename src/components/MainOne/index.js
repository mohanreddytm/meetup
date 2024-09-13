import {Component} from 'react'

import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

class MainOne extends Component {
  state = {isAlreadyRegistered: false}

  notRegistered = () => (
    <div className="main-cont">
      <h1 className="main-head">Welcome to Meetup</h1>
      <p className="main-para">Please register for the topic</p>
      <Link to="/register" className="normal-link">
        <button type="button" className="main-button">
          Register
        </button>
      </Link>
    </div>
  )

  registeredOne = () => (
    <div className="main-cont">
      <h1 className="sub-head">Hello James</h1>
      <p className="sub-para">Welcome to One</p>
    </div>
  )

  render() {
    const {isAlreadyRegistered} = this.state
    return (
      <div className="initial-cont">
        <Header />
        <div className="main-one-cont">
          {isAlreadyRegistered ? this.registeredOne() : this.notRegistered()}
          <img
            className="main-image"
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </div>
      </div>
    )
  }
}

export default MainOne
