import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import UploadImage from './UploadImage';
import axios from 'axios';

function NewPostDialogue (props) { 

  const [open, setOpen] = React.useState(false);
  const [postTitle, setTitle] = React.useState('');
  const [postContent, setContent] = React.useState('');
  const [postImg, setImg] = React.useState('');
  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleContent = (event) => {
    setContent(event.target.value)
  }

  const handleImage = (event) => {
    setImg(event.target.value)
  }

  const handleTitle = (event) => {
    setTitle(event.target.value)
  }

  const addPost = () => {
    axios.post(`http://localhost:4000/api/v1/${props.user}/posts`, {
      title: postTitle,
      content: postContent,
      image: postImg.name,
      authorId: props.user,
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

  let onFormSubmit = (e) => {
    console.log("form submitted -------")
    e.preventDefault()
    const formData = new FormData();
    formData.append('postImg', postImg);
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
    };
    axios.post("http://localhost:4000/api/v1/upload", formData, config)
      .then((res) => {
        console.log(res)
    })
  }

  let onFileChange = (e) => {
    console.log("file changed -------")
    console.log(e.target.files[0])
    setImg(e.target.files[0])
  }

  onFormSubmit = onFormSubmit.bind(NewPostDialogue);
  onFileChange = onFileChange.bind(NewPostDialogue);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Create a New Post
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
              onChange={handleTitle}
            />
            <br/>
          {/* TODO move to a new component*/}
            <div className="container" id="postImg" name="image">
                <div className="row">
                    <form onSubmit={onFormSubmit}>
                          <input type="file" onChange={onFileChange} />
                          <button className="button" type="submit">Upload</button>
                    </form>
                </div>
            </div>

            {/* <UploadImage
              id="postImage"
              name="image"
              onChange={handleImage}
            /> */}
            <TextField
              id="postContent"
              type="text" 
              placeholder="Enter post content" 
              name="content" 
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