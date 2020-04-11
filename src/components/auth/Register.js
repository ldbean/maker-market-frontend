import React from 'react';
import {Button, TextField} from '@material-ui/core';

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
            <TextField 
              label="Username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}>
            </TextField >
          <br />
            <TextField 
              label="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}>
            </TextField>
          <br />
            <TextField 
              label="Confirm Password"
              type="password"
              name="confirmPass"
              value={this.state.confirmPass}
              onChange={this.handleChange}>
            </TextField>
          <br />
          <Button type="submit">Register</Button>
        </form>
      </div>
    )
  }
}

export default Register;