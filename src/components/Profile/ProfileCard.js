import React from 'react';
import { Typography, Chip, Card, Button, ButtonGroup } from '@material-ui/core';
import './Profile.css'
import { API_URL } from '../../Constants'

class ProfileCard extends React.Component {

    state = {
        isEditing: false
    }

    render() {
        return (
            <Card className="profile" >
                    <div className="aside details"> 
                        <img className="profile-photo" alt={this.props.user} src={API_URL + "static/uploads" + this.props.image}/>
                        <br/>
                        <Typography className="name" variant="overline">
                            {this.props.user}
                        </Typography>
                    </div>
                    <div className="aside tagline" variant="body1">
                        <Typography>
                            {this.props.tagline}
                        </Typography>
                        <div className="skills">
                            <Chip size="small" label="skill" />
                            <Chip size="small" label="skill" />
                            <Chip size="small" label="skill" />
                            <Chip size="small" label="skill" />
                        </div>
                    </div>
                    {/* <div className="main">
                        <Button color="primary">Follow</Button>
                    </div> */}
                <ButtonGroup 
                className="controls"
                variant="contained" 
                color="primary" 
                aria-label="contained primary button group">
                    <Button>Work</Button>
                    <Button>About</Button>
                    <Button>Contact</Button>
                </ButtonGroup>
            </Card>
        )
    }
}

export default ProfileCard;