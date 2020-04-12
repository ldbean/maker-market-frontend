import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PostContainer from '../../containers/PostContainer'
import ProfileCard from './ProfileCard'
import { Typography, Container, Card, Button, ButtonGroup, CardContent } from '@material-ui/core';
import './Profile.css'

class Profile extends React.Component {

    render() {
        console.log("profile page reached")
        console.log(this.props.user)
        return(
            <Container maxWidth="xl">
                <ProfileCard user={this.props.user}/>
                
                <PostContainer/>
            </Container>
        );
    };
};

export default Profile;