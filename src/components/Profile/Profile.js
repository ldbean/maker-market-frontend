import React from 'react';
import ProfilePostContainer from '../../containers/ProfilePostContainer';
import ProfileCard from './ProfileCard';
import { Container } from '@material-ui/core';
import './Profile.css';

const Profile = (props) => {
    return(
        <Container maxWidth="xl">
            <ProfileCard user={props.user}/>
            <ProfilePostContainer user={props.user}/>
        </Container>
    );
};

export default Profile;