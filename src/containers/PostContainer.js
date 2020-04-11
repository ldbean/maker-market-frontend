import React from 'react';
import Grid from '@material-ui/core/Grid';
import Post from '../components/Post/Post'


class PostContainer extends React.Component {

    state = {
        posts: []
    }

    render () {
        return(
            <Grid >
                {posts}
            </Grid >
        )
    }
}