import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

function NewPostDialogue (props) { 

  const [open, setOpen] = React.useState(false);
  const [postTitle, setTitle] = React.useState('')
  const [postContent, setContent] = React.useState('')

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleSubmit = (event) => {
  //   setTitle(title.value)
  //   setContent(content.value)
  // }
  const handleContent = (event) => {
    setContent(event.target.value)
  }

  const handleTitle = (event) => {
    setTitle(event.target.value)
  }

  const addPost = () => {
    let title = document.querySelector('#postTitle')
    let content = document.querySelector('#postContent')
    axios.post('http://localhost:4000/api/v1/posts', {
      title: postTitle,
      content: postContent,
      // authorId: props.authorId,
    })
    .then((res) => {
      console.log(res.data);
      handleClose();
      let post = res.data;
      console.log("post = ", post)
      props.handleAddPost(post);
    })
    .catch((err) => {console.log(err)})
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Testing
          </DialogContentText>
            <TextField
              autoFocus
              id="postTitle"
              type="text" 
              placeholder="Enter title" 
              name="title" 
              value={postTitle}
              onChange={handleTitle}
            />
            <br/>
            <TextField
              id="postContent"
              type="text" 
              placeholder="Enter post content" 
              name="content" 
              value={postContent}
              onChange={handleContent}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addPost} color="primary">
            Post
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NewPostDialogue;