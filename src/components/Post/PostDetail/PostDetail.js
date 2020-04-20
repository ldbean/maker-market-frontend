import React from 'react';
import { Paper } from '@material-ui/core';
import Constants from '../../../Constants';
import './PostDetail.css';

function PostDetail (props) {
    return (
        <Paper className="paper post-detail">
            <div id="post-display">
                <img src={Constants.API_URL + "static/uploads/" + props.post.image} alt={props.post.image}></img>
            </div>
            <div id="details">
                <h2>{props.post.title}</h2>
                <h5>{props.post.content}</h5>
                <p className="author">by {props.post.authorId}</p>
            </div>
        </Paper>
    )
}

export default PostDetail;