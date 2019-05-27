import React from 'react';

import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.css';

/*Pass an array of comments on each post object as a prop to an
instance of the CommentSection component.*/

const PostContainer = props => {
    return (
        <div className='post-container'>
            {props.users.map(user => {
                return (
                    <div className='instagram-user-container'>
                        <div className='user-container'>
                            <img src={user.thumbnailUrl} className='thumbnail' alt='user thumbnail'></img>
                            <p key={`${user.id}*${Math.random()}`} className='user'>{user.username}</p>
                        </div>
                        <img src={user.imageUrl} className='portrait' alt='user portrait'></img>
                        <div className='reaction-container'>
                            <img src="https://img.icons8.com/ios/50/000000/hearts.png" className='like icon' alt='like this post'></img>
                            <img src="https://img.icons8.com/ios/50/000000/speech-bubble.png" className='comment icon' alt='comment'></img>
                        </div>
                        <p key={`${user.id}*${Math.random()}`} className='likes'>{user.likes} likes</p>
                        <div className='comments-container'>
                            {user.comments.map(comment => {
                                return (
                                    <CommentSection 
                                        key={`${user.id} * ${Math.random()}`}
                                        username={[4,6,3,2,1]}
                                        comment={comment.text}
                                    />
                                );
                            })}
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


export default PostContainer;