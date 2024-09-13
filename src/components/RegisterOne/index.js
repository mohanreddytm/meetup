import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class RegisterOne extends Component {
  state = {nameInput: '', topicInput: '', errorOne: false}

  onClickNameOne = event => {
    this.setState({nameInput: event.target.value})
  }

  onClickTopicOne = event => {
    this.setState({topicInput: event.target.value})
  }

  selectOne = x => {
    console.log(x)
    return <option key={x.id}>{x.displayText}</option>
  }

  registerOneButton = event => {
    event.preventDefault()
    const {nameInput} = this.state
    if (nameInput === '') {
      this.setState({errorOne: true})
    } else {
      this.setState({errorOne: false})
      const {history} = this.props
      history.replace('/')
    }
  }

  render() {
    const {nameInput, topicInput, errorOne} = this.state
    return (
      <div className="initial-cont">
        <Header />
        <div className="main-one-cont">
          <div className="register-cont">
            <img
              className="register-image"
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <form className="form-cont" onSubmit={this.registerOneButton}>
              <h1 className="form-heading">Let us join</h1>
              <label className="label-one" htmlFor="NameOne">
                NAME
              </label>
              <input
                value={nameInput}
                onChange={this.onClickNameOne}
                className="input-one"
                placeholder="Your name"
                id="NameOne"
                type="text"
              />
              <label className="label-one" htmlFor="TopicOne">
                TOPICS
              </label>
              <select
                value={topicInput.replaceAll(' ', '_').toUpperCase()}
                onChange={this.onClickTopicOne}
                className="input-one"
                id="TopicOne"
              >
                {topicsList.map(each => this.selectOne(each))}
              </select>
              <button type="submit" className="main-button again-button">
                Register Now
              </button>
              {errorOne && <p className="error-para">Please enter your name</p>}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default RegisterOne
