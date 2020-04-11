import React from 'react';
import Avatar from '@material-ui/core/Avatar';

export default function Profile (props) {
    return(
        <div>
            <Avatar alt={props.user} src="http://placekitten.com/200/200"/>

        </div>
    );
};