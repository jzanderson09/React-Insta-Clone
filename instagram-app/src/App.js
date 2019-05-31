import React from 'react';
import './App.css';

import DummyData from './DummyData';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/PostContainer/authentication/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      dummyData: []
    }
  }

  componentDidMount() {
    this.setState({dummyData: DummyData});
  }
  
  render() {
    return ([<ComponentFromWithAuthenticate 
        dummyData={this.state.dummyData} 
      />
    ]);
  }
}

export default App;
