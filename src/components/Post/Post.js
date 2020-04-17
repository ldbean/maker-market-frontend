import React from 'react';
import { Button, TextField } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import "./Post.css"
import PostMenu from './PostMenu/PostMenu';
import moment from 'moment';

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
            <Card className="post">
                {
                    this.state.isEditing &&
                    <>
                        <form className="edit-form"
                         onSubmit={this.submitEdit}>
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
                    <CardMedia
                        className="media"
                        image={`/public/${this.props.post.image}`}
                        title="Paella dish"
                    />
                    {/* <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                    </CardActions> */}
                    <CardContent>
                        <Typography>
                        {this.props.post.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.post.content}
                        </Typography>
                    </CardContent>
                    
                    <CardHeader
                        className="post-header"
                        avatar={
                        <Avatar aria-label="recipe" className="avatar"></Avatar>
                        }
                        action={
                            this.props.user === this.props.author ? 
                            <IconButton aria-label="settings">
                                <PostMenu handleEdit={this.handleEdit} handleDelete={this.props.handleDelete} post={this.props.post}/>
                            </IconButton>
                            :
                            <>
                            </>
                        }
                        title={this.props.author}
                        subheader={moment(this.props.post.createdAt).format('MMMM Do YYYY, h:mm a')}
                    />
                    
                </>
                }
            </Card>
        )
    }
} 

export default Post;