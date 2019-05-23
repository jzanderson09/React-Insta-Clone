import React from 'react';

import './SearchBar.css';

const SearchBar = props => {
    return(
        <div className='search-bar-container'>
            <div className='logo-and-text-container'>
                <img className='instagram-logo' src='https://img.icons8.com/metro/2x/instagram-new.png' alt='Instagram camera'></img>
                <h1 className='text-divider'>|</h1>
                <h1>Instagram</h1>
            </div>
            <input
                type='text'
                name='searchBar'
                className='search-bar'
    placeholder='Search'
                autoComplete='off' 
            />
            <div className='logo-container'>
                <img className='compass-logo' src='https://img.icons8.com/material-outlined/2x/compass.png' alt='explore'></img>
                <img className='heart-logo' src='https://img.icons8.com/ios/2x/hearts.png' alt='following'></img>
                <img className='friends-logo' src='https://img.icons8.com/ios/2x/user-male-circle.png' alt='friends'></img>
            </div>
        </div>
    );

};

export default SearchBar;