import React from 'react';

import './CommentSection.css';

/*<Comment Section /> --> receives an array of comments as props
and renders a Comment component with the username of the poster as
well as the post's text. Also should be an input box that allows
users to submit a new comment for any post.*/

const CommentSection = props => {props.user.comments.map(comment => {
    return (
        <div className='comment-container'>
            <p>{comment.id}</p>
            <p>{comment.username}</p>
            <p>{comment.text}</p>
        </div>
    );
})}

export default CommentSection;