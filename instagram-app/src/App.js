import React from 'react';
import './App.css';

import DummyData from './DummyData';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }

  componentDidMount() {
    this.setState({dummyData: DummyData});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <PostContainer 
            dummyData={this.state.dummyData}
          />
        </header>
      </div>
    );
  }
}

export default App;
