import React from 'react';
import './App.css';

import DummyData from './DummyData';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      headerText: 'Welcome to Instagram, this is my state message!',
      dummyData: DummyData,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <PostContainer 
            users={this.state.dummyData}
            postTimeStamp={this.postTimeStamp}
          />
        </header>
      </div>
    );
  }
}

export default App;
