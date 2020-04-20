import React from 'react';
import PostContainer from '../containers/PostContainer';

function Discover (props) {
    return (
        <div className="discover">
            <div id="discover-header">
                <h2>Checkout the work from our Makers!</h2>
            </div>
            
            <PostContainer/>

        </div>
    )
}

export default Discover;