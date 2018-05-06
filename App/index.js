import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import Playlist from './Playlist';
import VideoInfo from './VideoInfo';
import Spinner from 'react-svg-loader!./assets/spinner.svg';
import styles from './App.css';
import getPlaylist from '../getPlaylist.js';

class App extends Component {
  state = {
    isLoading: true,
    currentVideo: null,
    videos: [],
  };

  componentDidMount = () => {
    getPlaylist('documentary').then(results => {
      this.setState({
        isLoading: false,
        currentVideo: results[0],
        videos: results,
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
        <Header />
        <div className={styles.content}>
          {state.isLoading ? (
            <Spinner className={styles.spinner} />
          ) : (
            <React.Fragment>
              <Player video={state.currentVideo} />
              <Playlist
                videos={state.videos}
                currentVideo={state.currentVideo}
                loadVideo={this.loadVideo}
              />
              {state.currentVideo && <VideoInfo video={state.currentVideo} />}
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default App;
