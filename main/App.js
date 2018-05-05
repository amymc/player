import React, { Component } from 'react';
import Player from './Player';
import Playlist from './Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }

  componentDidMount() {
    this.getPlaylist();
  }

  getPlaylist() {
    fetch(
      'https://api.vimeo.com/channels/documentary/videos?access_token=b01e6d1ea960f10c41ed22b14baa8c07'
    )
      .then(resp => resp.json())
      .then(({ data }) => {
        this.setState({ videos: data });
      });
  }

  render() {
    const { state } = this;

    return (
      <div className="app">
        <Player video={state.videos[0]} />
        <Playlist videos={state.videos.slice(1)} />
      </div>
    );
  }
}

export default App;
