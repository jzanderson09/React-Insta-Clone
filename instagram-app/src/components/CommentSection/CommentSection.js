import React from 'react';

import './CommentSection.css';

/*<Comment Section /> --> receives an array of comments as props
and renders a Comment component with the username of the poster as
well as the post's text. Also should be an input box that allows
users to submit a new comment for any post.*/

const CommentSection = props => {
    return (
        <div className='comment'>
            <strong><p key={props.key} className='comment-user'>{props.username}</p></strong>
            <p key={props.key} className='user-comment'>&nbsp;{props.comment}</p>
        </div>
    );
}

export default CommentSection;