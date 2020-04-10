import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

const Routes = (props) => {
    return (
        <Switch>
            <Route
                exact path='/'
                component={Home}
            />
            <Route
                path='/posts'
                render={() => props.user ?
                  <h2>Posts</h2>
                :
                  <Redirect to="/login" />
                }
            />
            <Route
                path='/register'
                render={() => props.user ? 
                  <Redirect to="/posts" />
                :
                  <Register register={props.register} />
                }
            />
            <Route
                path='/login'
                render={() => props.user ?
                  <Redirect to="/posts" />
                :
                    <Login login={props.login} />
                }
            />
        </Switch>
    )
};

export default Routes;