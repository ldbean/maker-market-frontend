import React from 'react';
import ProfilePostContainer from '../../containers/ProfilePostContainer';
import ProfileCard from './ProfileCard';
import userAPI from '../../api/UserApi';
import { Container } from '@material-ui/core';
import './Profile.css';

class Profile extends React.Component {
    state = {
        user: this.props.user,
        image: '',
        tagline: '',
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.user!==prevState.user){
          return { user: nextProps.user};
       }
       else return null;
    }
    getUser = () => {
        userAPI.show(this.state.user)
        .then(res => {
            console.log("the user in props and in state")
            console.log(this.props.user)
            // console.log(this.state.user)
            // console.log(res.data[0].tagline)
            if (res.status === 200) {
                this.setState({
                    user: res.data[0].user,
                    image: res.data[0].image,
                    tagline: res.data[0].tagline,
                })
            }
        })
        .catch(err => console.log(err));
    }
    
    componentDidUpdate(prevProps) {
        if(prevProps.user!==this.props.user){
             this.setState({user: this.props.user});
             this.getUser();
        }
     }
    

    render () {
        console.log(this.state.user)
        return(
            <Container maxWidth="xl">
                <ProfileCard 
                    user={this.state.user}
                    image={this.state.image}
                    tagline={this.state.tagline}
                />
                <ProfilePostContainer 
                    user={this.props.user}
                    image={this.state.image}
                />
            </Container>
        );
    }
    
};

export default Profile;