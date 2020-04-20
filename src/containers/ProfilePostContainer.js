import React from 'react';
import postAPI from '../api/PostApi';
import userAPI from '../api/UserApi';
import Post from '../components/Post/Post';
// import UploadImage from '../components/Post/UploadImage'
import NewPostDialogue from '../components/Post/NewPostDialogue';
import './PostContainer.css';

class ProfilePostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    getPosts = () => {
        console.log("the user is: ", this.props.user)
        postAPI.show(this.props.user)
        .then(res => {
            if (res.status === 200) {
                this.setState({
                    posts: res.data
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
            console.log(`the response in handleEdit: ${res}`)
            let posts = this.state.posts;
            let postToEdit = posts.findIndex(post => post._id === res.data._id);
            posts[postToEdit] = res.data;
            this.setState({
                posts
            })
        })
    }

    handleDelete = (id) => {
        console.log("reached handleDelete in ProfilePostContainer")
        console.log(`post id: ${id}`)
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
            this.getPosts()
       }  
    }
  
    render () {
        let posts = this.state.posts;
        console.log("the user in state: ", this.props.user)
        console.log("the posts in state: ", this.props.posts)

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
                        handleDelete={this.handleDelete} 
                        author={post.authorId}
                        user={this.props.user}
                        image={this.props.image}
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

export default ProfilePostContainer;