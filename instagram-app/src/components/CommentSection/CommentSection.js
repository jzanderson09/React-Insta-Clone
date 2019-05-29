import React from 'react';
import PropTypes from 'prop-types';

import './CommentSection.css';

/*<Comment Section /> --> receives an array of comments as props
and renders a Comment component with the username of the poster as
well as the post's text. Also should be an input box that allows
users to submit a new comment for any post.*/

class CommentSection extends React.Component {
    constructor(props) {
        super();
        this.state = {
            user: props.user,
            userComments: props.user.comments,
            likes: props.likes,
            userLiked: props.likes + 1,
            userUnliked: props.likes,
            id: '',
            username: 'jzanderson09',
            text: '',
            placeholder: 'Add a comment...'
        }
    }

    clickHandler = event => {
        this.setState({id: event.target.id});
      }

    addComment = event => {
        event.preventDefault();
        let newComment = {
            id: this.state.id,
            username: 'jzanderson09',
            text: this.state.text
        }
        this.setState({
            userComments: [...this.state.userComments, newComment],
            id: '',
            text: ''
        });
    }

    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value });
    }

    clickToLike = event => {
        if (this.state.likes === this.state.userUnliked) {
            this.setState({
                likes: this.state.userLiked
            });
        }
        else {
            this.setState({
                likes: this.state.userUnliked
            });
        }
      }

    render() {
        return (
            <div className='user-container'>
                <div className='comment-container'>
                    <div className='icons'>
                        <img 
                            src="https://img.icons8.com/ios/50/000000/hearts.png" 
                            className='like icon' alt='like this post' 
                            onClick={this.clickToLike} 
                        />
                        <img 
                            src="https://img.icons8.com/ios/50/000000/speech-bubble.png" 
                            className='comment-bubble icon' 
                            alt='comment' 
                        />
                    </div>
                    <p key={`${this.state.user.id} + ${Math.random()}`} className='likes'>{this.state.likes} likes</p>
                    {this.state.userComments.map(comment => {
                        return(
                            <div className='comment'>
                                <strong><p>{comment.username}</p></strong>
                                <p>&nbsp;{comment.text}</p>
                            </div>
                        );
                    })}
                    <form 
                        className='add-comment-form' 
                        onSubmit={this.addComment}>
                        <input
                            id={this.state.user.id}
                            className='add-comment'
                            type='text'
                            name='text'
                            placeholder={this.state.placeholder}
                            autoComplete='off'
                            onClick={this.clickHandler}
                            onChange={this.changeHandler}
                        />
                        <button className='submit-button' onClick={this.addComment}><strong>...</strong></button>   
                    </form>
                </div>
            </div>
        );
    }
}

CommentSection.propTypes = {
    user: PropTypes.object.isRequired
}

export default CommentSection;