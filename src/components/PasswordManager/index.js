import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordList from '../PasswordList'
import './index.css'

const initalBackgroundContainer = [
  'yellow',
  'green',
  'red',
  'pink',
  'blue',
  'brown',
  'orange',
  'black',
]

class PasswordManager extends Component {
  state = {
    passwords: [],
    websiteInput: '',
    userInput: '',
    passwordInput: '',
    searchInput: '',
    isShow: false,
  }

  websiteAction = event => {
    this.setState({
      websiteInput: event.target.value,
    })
  }

  userInputAction = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  passwordInputAction = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  onChangeSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  getPassword = () => {
    const {passwords} = this.state
    const {searchInput} = this.state
    const passwordList = passwords.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return passwordList
  }

  onAddPassword = event => {
    event.preventDefault()
    const {websiteInput, userInput, passwordInput} = this.state
    const initalBackground = `initial-container ${
      initalBackgroundContainer[
        Math.ceil(Math.random() * initalBackgroundContainer.length - 1)
      ]
    }`

    const addedPass = {
      id: uuidv4,
      website: websiteInput,
      user: userInput,
      password: passwordInput,
      isShow: false,
      inital: initalBackground,
    }

    this.setState(prevState => ({
      passwords: [...prevState.passwords, addedPass],
      userInput: '',
      websiteInput: '',
      passwordInput: '',
    }))
  }

  deletePassword = id => {
    const {passwords} = this.state
    this.setState({
      passwords: passwords.filter(each => each.id !== id),
    })
  }

  toggleisChecked = () => {
    const {isShow} = this.state
    this.setState({
      isShow: !isShow,
    })
  }

  render() {
    const {passwords} = this.state
    const {passwordList} = this.getPassword()
    const {userInput, passwordInput, websiteInput, isShow} = this.state
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="applogo"
        />
        <div className="addcard">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password"
          />
          <div className="formcard">
            <form className="form" onSubmit={this.onAddPassword}>
              <h1 className="heading">Add New Password</h1>
              <div className="websitecontainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website-image"
                />
                <input
                  type="text"
                  className="website"
                  placeholder="Enter Website"
                  value={websiteInput}
                  onChange={this.websiteAction}
                />
              </div>
              <div className="websitecontainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="website-image"
                />
                <input
                  type="text"
                  className="website"
                  value={userInput}
                  placeholder="Enter Username"
                  onChange={this.userInputAction}
                />
              </div>
              <div className="websitecontainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="website-image"
                />
                <input
                  type="password"
                  className="website"
                  value={passwordInput}
                  placeholder="Enter Password"
                  onChange={this.passwordInputAction}
                />
              </div>
              <div className="button-container">
                <button className="addbutton" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bottomcard">
          <div className="head-section">
            <div className="head">
              <h1 className="commentshead">Your Passwords</h1>
              <p className="count">{passwords.length}</p>
            </div>
            <div className="websitecontainer1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="website-image1"
              />
              <input
                type="search"
                className="website1"
                placeholder="Search"
                onChange={this.onChangeSearch}
              />
            </div>
          </div>
          <hr />
          <div className="showcontainer">
            <input
              type="checkbox"
              className="check-box"
              id="checkbox"
              onChange={this.toggleisChecked}
            />
            <label htmlFor="checkbox" className="label">
              Show Passwords
            </label>
          </div>
          {passwords.length === 0 ? (
            <div className="nopassword">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password"
              />
              <p className="matter">No Passwords</p>
            </div>
          ) : (
            <ul className="ul1">
              {passwordList.map(each => (
                <PasswordList
                  key={each.id}
                  passwordDetails={each}
                  deletePassword={this.deletePassword}
                  toggleisChecked={this.toggleisChecked}
                  toggleisChecked1={isShow}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
