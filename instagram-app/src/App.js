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
      dummyData: []
    };
  }

  componentDidMount() {
    this.setState({dummyData: DummyData});
  }

  addComment(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      console.log(event.target);
    }
    // this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <PostContainer 
            users={this.state.dummyData}
            addComment={this.addComment}
          />
        </header>
      </div>
    );
  }
}

export default App;
