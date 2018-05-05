import React, { Component } from 'react';
import VimeoPlayer from '@vimeo/player';
import styles from './Player.css';

class Player extends Component {
  componentDidUpdate = prevProps => {
    const { player, props } = this;
    if (prevProps.video === props.video) return;
    if (player) {
      player.loadVideo(props.video.id);
    } else {
      this.player = new VimeoPlayer('player', {
        id: props.video.id,
        width: 640,
      });
    }
  };

  componentWillUnmount = () => {
    this.player.destroy();
  };

  render() {
    return <div id="player" className={styles.player} />;
  }
}

export default Player;
