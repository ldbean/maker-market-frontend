import React from 'react';
import {Button, TextField} from '@material-ui/core';

class Login extends React.Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        let user = {
          username: this.state.username,
          password: this.state.password
        }
        this.props.login(user);
    }

    render() { 
        return ( 
            <div className="login">
            <form onSubmit={this.handleSubmit}>
                <TextField
                    label="Username"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}>
                </TextField>
              <br />
                <TextField
                    label="Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}>
                </TextField>
              <br />
              <Button type="submit">Login</Button>
            </form>
          </div>
        )
    }
};

export default Login;