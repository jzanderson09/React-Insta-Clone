import React from 'react';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
        <div className='post-container'>
            <h1>{props.data.headerText || props.headerText}</h1>
            {props.data.dummyData.map(item => {
                return (
                    <div className='instagram-user-container'>
                        <p>{item.id}</p>
                        <p>{item.username}</p>
                        {/* <img src={item.thumbnailUrl} className='thumbnail' alt='user thumbnail'></img>
                        <img src={item.imageUrl} className='portrait' alt='user portrait'></img> */}
                        <p>{item.likes}</p>
                        <p>{item.timestamp}</p>
                        {item.comments.map(comment => {
                            return (
                                <div className='comment-container'>
                                    <p key={props.data.currentTime}>{comment.id}</p>
                                    <p key={props.data.currentTime + 1}>{comment.username}</p>
                                    <p key={props.data.currentTime + 2}>{comment.text}</p>
                                </div>
                            );
                        })}
                    </div>
                );
            })}   
        </div>
    );
} 

PostContainer.propTypes = {
    postText: PropTypes.string
};

PostContainer.defaultProps = {
    postText: 'Welcome to Instagram, this is my defaultProps message!'
}

export default PostContainer;