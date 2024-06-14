import './index.css'

const PasswordList = props => {
  const {passwordDetails, deletePassword, toggleisChecked1} = props
  const {id, website, user, password, inital} = passwordDetails
  const initalname = user ? user[0].toUpperCase() : ''

  const onDeletePass = () => {
    deletePassword(id)
  }

  return (
    <div className="passwordcontainer">
      <div className="headsection">
        <div className={inital}>
          <p className="initialpara">{initalname}</p>
        </div>
        <div className="section">
          <p className="p1">{website}</p>
          <p className="p1">{user}</p>
          {toggleisChecked1 ? (
            <p className="p1">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars"
            />
          )}
        </div>
      </div>
      <button className="delete-button" type="button" onClick={onDeletePass}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </div>
  )
}

export default PasswordList
