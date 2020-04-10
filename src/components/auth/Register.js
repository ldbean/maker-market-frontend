import React from 'react';

class Register extends React.Component {

  state = {
    username: '',
    password: '',
    confirmPass: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let newUser = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.register(newUser);
  }

  render() {
    return(
      <div className="register">
        <form onSubmit={this.handleSubmit}>
          <label>Username: 
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}>
            </input>
          </label>
          <br />
          <label>Password: 
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}>
            </input>
          </label>
          <br />
          <label>Confirm Password: 
            <input
              type="password"
              name="confirmPass"
              value={this.state.confirmPass}
              onChange={this.handleChange}>
            </input>
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    )
  }
}

export default Register;