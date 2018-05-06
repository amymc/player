import React, { Component } from 'react';
import Player from './Player';
import Playlist from './Playlist';
import VideoInfo from './VideoInfo';
import styles from './App.css';

class App extends Component {
  state = {
    isLoading: true,
    currentVideo: null,
    videos: [],
  };

  componentDidMount = () => {
    this.getPlaylist();
  };

  getId = uri => uri.split('/videos/')[1];

  getPlaylist = () => {
    fetch(
      'https://api.vimeo.com/channels/documentary/videos?access_token=b01e6d1ea960f10c41ed22b14baa8c07'
    )
      .then(resp => resp.json())
      .then(({ data }) => {
        data.forEach(item => (item.id = this.getId(item.uri)));
        this.setState({
          isLoading: false,
          currentVideo: data[0],
          videos: data,
        });
      });
  };

  loadVideo = video => {
    this.setState({ currentVideo: video });
  };

  render() {
    const { state } = this;

    return (
      <div className={styles.app}>
        <Player video={state.currentVideo} />
        <Playlist
          videos={state.videos}
          currentVideo={state.currentVideo}
          loadVideo={this.loadVideo}
        />
        {state.currentVideo && <VideoInfo video={state.currentVideo} />}
      </div>
    );
  }
}

export default App;
