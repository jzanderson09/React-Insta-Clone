import React from 'react';
import PropTypes from 'prop-types';

import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.css';

/*Pass an array of comments on each post object as a prop to an
instance of the CommentSection component.*/

const PostContainer = props => {
    return (
        <div className='post-container'>
            {/* <h1>{props.data.headerText || props.headerText}</h1> */}
            {props.users.map(user => {
                return (
                    <div className='instagram-user-container'>
                        <p key={`${user.id}-${Math.random()}`}>{user.username}</p>
                        {/* <img src={item.thumbnailUrl} className='thumbnail' alt='user thumbnail'></img>
                        <img src={item.imageUrl} className='portrait' alt='user portrait'></img> */}
                        <p key={`${user.id}-${Math.random()}`}>{user.likes}</p>
                        <p key={`${user.id}-${Math.random()}`}>{user.timestamp}</p>
                        {user.comments.map(comment => {
                            return (
                                <div className='comment-container'>
                                    <p>{comment.id}</p>
                                    <p>{comment.username}</p>
                                    <p>{comment.text}</p>
                                </div>
                            );
                        })}
                    </div>
                );
            })}  
        </div>
    );
} 

// PostContainer.propTypes = {
//     postText: PropTypes.string
// };

// PostContainer.defaultProps = {
//     postText: 'Welcome to Instagram, this is my defaultProps message!'
// }

export default PostContainer;