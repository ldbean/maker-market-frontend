import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./Post.css"

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

class Post extends React.Component {
    state = {
        isEditing: false,
        title: '',
        content: ''
    }

    handleEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitEdit = (e) => {
        e.preventDefault();
        let postToUpdate = {
            _id: this.props.post._id,
            title: this.state.title,
            content: this.state.content
        }
        this.props.handleEdit(postToUpdate);
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    render() {
        return(
            <Card class="post">
                {
                    this.state.isEditing &&
                    <>
                        <form onSubmit={this.submitEdit}>
                            <TextField
                                label="Title"
                                type="text"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleChange}>
                            ></TextField>
                            <br/>
                            <TextField
                                label="Content"
                                type="text"
                                name="content"
                                value={this.state.content}
                                onChange={this.handleChange}>
                            </TextField>
                            <br/>
                            <Button onClick={this.handleEdit}>Cancel</Button>
                            <Button type="submit">Done</Button>
                        </form>
                    </>
                }
                { 
                !this.state.isEditing && 
                <>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className="avatar">
                            R
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title={this.props.post.title}
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        className="media"
                        image="http://placebear.com/200/200"
                        title="Paella dish"
                    />
                    <h5></h5>
                    <p>{this.props.post.content}</p>
                    <Button onClick={this.handleEdit}>Edit</Button>
                    <Button onClick={() => this.props.handleDelete(this.props.post._id)}>Delete</Button>
                </>
                }
            </Card>
        )
    }
} 

export default Post;