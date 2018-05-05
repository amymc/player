import React, { Component } from 'react';
import VimeoPlayer from '@vimeo/player';

class Player extends Component {
  componentDidUpdate(prevProps) {
    const { video } = this.props;
    if (prevProps.video !== video) {
      new VimeoPlayer('player', {
        url: video.link,
        width: 640,
      });
    }
  }

  render() {
    return <div id="player" />;
  }
}

export default Player;
