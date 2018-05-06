import React, { Component } from 'react';
import VimeoPlayer from '@vimeo/player';
import styles from './Player.css';

class Player extends Component {
  componentDidUpdate = prevProps => {
    const { player, props } = this;
    if (prevProps.video === props.video) return;
    if (player) {
      player.loadVideo(props.video.id).then(() => player.play());
    } else {
      this.player = new VimeoPlayer('player-video', {
        id: props.video.id,
        width: 640,
      });
      this.player.play();
    }
  };

  componentWillUnmount = () => {
    this.player.destroy();
  };

  render() {
    const { video } = this.props;

    return (
      <div className={styles.player}>
        <div id="player-video" />
        {video && <h1 className={styles.title}>{video.name}</h1>}
        {video && <p className={styles.description}>{video.description}</p>}
      </div>
    );
  }
}

export default Player;
