import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const PostsPage = props => {
    return (
        <header className="App-header">
            <SearchBar
                logOut={props.logOut}
            />
            <PostContainer 
                dummyData={props.dummyData}
            />
        </header>
    );
};

export default PostsPage;
