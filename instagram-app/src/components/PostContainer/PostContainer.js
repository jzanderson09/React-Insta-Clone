import React from 'react';
import PropTypes from 'prop-types';

import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.css';

/*Pass an array of comments on each post object as a prop to an
instance of the CommentSection component.*/

const PostContainer = props => {
    return (
        <div className='post-container'>
            {props.dummyData.map(user => {
                return (
                    <div className='instagram-user-container'>
                        <div className='user-container'>
                            <img src={user.thumbnailUrl} className='thumbnail' alt='user thumbnail'></img>
                            <p key={user.id} className='user'>{user.username}</p>
                        </div>
                        <img src={user.imageUrl} className='portrait' alt='user portrait'></img>
                        <div className='reaction-container'>
                            <img src="https://img.icons8.com/ios/50/000000/hearts.png" className='like icon' alt='like this post'></img>
                            <img src="https://img.icons8.com/ios/50/000000/speech-bubble.png" className='comment icon' alt='comment'></img>
                        </div>
                        <p key={`${user.id} + ${Math.random()}`} className='likes'>{user.likes} likes</p>
                        <div className='commentSection-container'>
                            <CommentSection 
                                user={user}
                            />
                        </div>
                        <div className='timestamp-container'>
                            <p key={`${user.id}*${Math.random()}`}>{user.timestamp}</p>
                        </div>
                    </div>
                );
            })}  
        </div>
    );
} 

PostContainer.propTypes = {
    dummyData: PropTypes.arrayOf(PropTypes.object)
};

/* ~{this.state.dummyData.[id:{key}].comments.push}~ --> Adding comments  */

export default PostContainer;