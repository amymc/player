import React, { Component } from 'react';
import ListItem from './ListItem';
import styles from './Playlist.css';

class Playlist extends Component {
  constructor() {
    super();
    this.refsCollection = [];
  }

  onClick = video => {
    this.playlist.scroll({
      top: this.refsCollection[video.id].offsetTop,
      left: 0,
      behavior: 'smooth',
    });
    this.props.loadVideo(video);
  };

  render() {
    const { props } = this;
    return (
      <div className={styles.playlist} ref={el => (this.playlist = el)}>
        {props.videos.map((video, index) => (
          <ListItem
            key={index}
            video={video}
            onClick={this.onClick}
            itemRef={instance => {
              this.refsCollection[video.id] = instance;
            }}
          />
        ))}
      </div>
    );
  }
}

export default Playlist;
