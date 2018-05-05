import React, { Component } from 'react';
import Player from './Player';
import Playlist from './Playlist';

class App extends Component {
  state = {
    currentVideo: null,
    videos: [],
  };

  componentDidMount = () => {
    this.getPlaylist();
  };

  getPlaylist = () => {
    fetch(
      'https://api.vimeo.com/channels/documentary/videos?access_token=b01e6d1ea960f10c41ed22b14baa8c07'
    )
      .then(resp => resp.json())
      .then(({ data }) => {
        this.setState({ currentVideo: data[0], videos: data.slice(1) });
      });
  };

  loadVideo = video => {
    console.log('hey', video);
    this.setState({ currentVideo: video });
  };

  render() {
    const { state } = this;

    return (
      <div className="app">
        <Player video={state.currentVideo} />
        <Playlist videos={state.videos} loadVideo={this.loadVideo} />
      </div>
    );
  }
}

export default App;
