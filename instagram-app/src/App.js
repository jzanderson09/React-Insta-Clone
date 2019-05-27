import React from 'react';
import './App.css';

import DummyData from './DummyData';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor() {
    console.log('Constructor invoked!');
    super();
    this.state = {
      headerText: 'Welcome to Instagram, this is my state message!',
      dummyData: []
    };
  }

  componentDidMount() {
    console.log('CDM invoked!');
    this.setState({dummyData: DummyData});
  }

  render() {
    console.log('render invoked!');
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <PostContainer 
            users={this.state.dummyData}
          />
        </header>
      </div>
    );
  }
}

export default App;
