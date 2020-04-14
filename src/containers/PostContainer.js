import React from 'react';
import postAPI from '../api/PostApi';
import Post from '../components/Post/Post';
import Container from '@material-ui/core/Container';
import NewPostDialogue from '../components/Post/NewPostDialogue';
import './PostContainer.css';

class PostContainer extends React.Component {

    state = {
        posts: []
    }
    
    handleAddPost = (post) => {
        this.state.posts.push(post);
        this.forceUpdate()
    }

    handleEdit = (post) => { 
        console.log(post)
        postAPI.update(post, this.props.user)
        .then(res => {
            let posts = this.state.posts;
            let postToEdit = posts.findIndex(post => post._id === res.data._id);
            posts[postToEdit] = res.data;
            this.setState({
                posts
            })
        })
    }

    handDelete = (id) => {
        postAPI.deletePost(id, this.props.user)
        .then(res => {
            let posts = this.state.posts.filter(post => post._id !== id);
            this.setState({
                posts
            })
        })
    }

    componentDidMount() {
        postAPI.index()
        .then(res => {
            if (res.status === 200) {
                this.setState({
                    posts: res.data
                })
            }
        })
        .catch(err => console.log(err));
    }

    render () {
        let posts = this.state.posts;
        return(
            <div className="post-container">
                <NewPostDialogue 
                    user={this.props.user} 
                    handleAddPost={this.handleAddPost}
                />
                {posts && posts.map(post => {
                    return <Post 
                        post={post} key={post._id} 
                        handleEdit={this.handleEdit} 
                        handleDelete={this.handDelete} 
                        author={post.authorId}
                    />
                })}
                {!posts && 
                    <>
                        <h3>No Posts Here.</h3>
                    </>                
                }
            </div >
        )
    }
}

export default PostContainer;