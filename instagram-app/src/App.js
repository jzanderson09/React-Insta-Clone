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
      dummyData: [],
      dummyDataCopy: [] /*never modified,
       replaces dummyData after search. Just read
       and used for full data replacement.*/
    };
  }

  componentDidMount() {
    this.setState({
      dummyData: DummyData,
      dummyDataCopy: DummyData});
  }
  
  render() {
    return ([<ComponentFromWithAuthenticate 
        dummyData={this.state.dummyData} 
      />
    ]);
  }
}

export default App;
