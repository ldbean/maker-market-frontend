import React from 'react';
import { Typography, Chip, Card, Button, ButtonGroup } from '@material-ui/core';
import './Profile.css'

class ProfileCard extends React.Component {

    state = {
        isEditing: false
    }

    render() {
        return (
            <Card className="profile" >
                    <div className="aside details"> 
                        <img className="profile-photo" alt={this.props.user} src="http://placekitten.com/200/200"/>
                        <br/>
                        <Typography className="name" variant="overline">
                            {this.props.user}
                        </Typography>
                    </div>
                    <div className="aside tagline" variant="body1">
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                        <div className="skills">
                            <Chip size="small" label="skill" />
                            <Chip size="small" label="skill" />
                            <Chip size="small" label="skill" />
                            <Chip size="small" label="skill" />
                        </div>
                    </div>
                    <div className="main">
                        <Button color="primary">Follow</Button>
                    </div>
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