import React from 'react';
import postAPI from '../api/PostApi';
import userAPI from '../api/UserApi';
import Post from '../components/Post/Post';
import UploadImage from '../components/Post/UploadImage'
import NewPostDialogue from '../components/Post/NewPostDialogue';
import './PostContainer.css';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    // componentDidMount() {
    //     // if(this.props.posts !== nextProps.posts){
    //        this.getPosts();
    // }

    getPosts = () => {
        console.log("the user is: ", this.props.user)
        userAPI.show(this.props.user)
        .then(res => {
            console.log(res)
            if (res.status === 200) {
                this.setState({
                    posts: res.data[0].posts
                })
            }
        })
        .catch(err => console.log(err));
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
    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.user!==prevState.user){
          return { user: nextProps.user};
       }
       else return null;
     }
     
    componentDidUpdate(prevProps) {
       if(prevProps.user!==this.props.user){
            this.setState({user: this.props.user});
            this.getPosts();
       }
    }
  
    render () {
        let posts = this.state.posts;
        console.log("the user in state: ", this.props.user)
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
                        user={this.props.user}
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