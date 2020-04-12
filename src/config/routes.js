import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Profile from '../components/Profile/Profile'
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import PostContainer from '../containers/PostContainer';

const Routes = (props) => {
    return (
        <Switch>
            <Route
                exact path='/'
                component={Home}
            />
            <Route
                path='/posts'
                render={
                  () => props.user ?
                    <PostContainer/>
                  :
                    <Redirect to="/login" />
                  }
            />
            <Route
                path='/profile'
                render={
                  () => true ?
                    <Profile user={props.user}/>
                  :
                    <Redirect to="/login"/>
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