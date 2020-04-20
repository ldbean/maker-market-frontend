import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { API_URL } from '../../Constants'
import { Button, TextField, Paper } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
import DialogContent from '@material-ui/core/DialogContent';
import Modal from '@material-ui/core/Modal';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import "./Post.css";
import PostDetail from './PostDetail/PostDetail';
import PostMenu from './PostMenu/PostMenu';
import moment from 'moment';

class Post extends React.Component {
    state = {
        isEditing: false,
        title: this.props.title,
        content: this.props.content,
        open: false,

    }
   
    handleOpen = () => {
        this.setState({open:true});
    };
    
    handleClose = () => {
        this.setState({open:false});
    };

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
                    <Paper>
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
                    </Paper>
                }
                { 
                !this.state.isEditing && 
                <>
                        <CardMedia
                            onClick={this.handleOpen}
                            className="media"
                            image={`http://localhost:4000/static/uploads/${this.props.post.image}`}
                            title={this.state.title}
                        />
                    {/* <button type="button" onClick={this.handleOpen}>
                        Open Modal
                        </button> */}
                    <Modal
                        disableEnforceFocus
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        <DialogContent>
                            <PostDetail
                                post={this.props.post}
                                user={this.props.user}
                                image={this.props.image}
                            />
                        </DialogContent>
                    </Modal>
                    <CardContent>
                        {/* <Typography>
                        {this.props.post.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.post.content}
                        </Typography> */}
                    </CardContent>
                    
                    <CardHeader
                        className="post-header"
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