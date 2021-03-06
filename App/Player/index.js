import React, { Component } from 'react';
import VimeoPlayer from '@vimeo/player';
import styles from './Player.css';

class Player extends Component {
  componentDidMount = prevProps => {
    this.player = new VimeoPlayer('player-video', {
      id: this.props.video.id,
    });
  };

  componentDidUpdate = prevProps => {
    const { player, props } = this;
    if (prevProps.video === props.video) return;
    player.loadVideo(props.video.id).then(() => player.play());
  };

  componentWillUnmount = () => {
    this.player.destroy();
  };

  render() {
    const { video } = this.props;

    return (
      <div
        className={styles.player}
        data-test-id="Player"
        data-video-id={video.id}
      >
        <div id="player-video" className={styles.video} />
      </div>
    );
  }
}

export default Player;
