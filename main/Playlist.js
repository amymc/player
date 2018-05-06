import React, { Component } from 'react';
import ListItem from './ListItem';
import styles from './Playlist.css';

class Playlist extends Component {
  constructor() {
    super();
    this.refsCollection = [];
  }

  onClick = video => {
    this.listItems.scroll({
      top: this.refsCollection[video.id].offsetTop - 15,
      left: 0,
      behavior: 'smooth',
    });
    this.props.loadVideo(video);
  };

  render() {
    const { props } = this;
    return (
      <div className={styles.playlist}>
        <h2 className={styles.title}> More from Documentary </h2>
        <div className={styles.listItems} ref={el => (this.listItems = el)}>
          {props.videos.map((video, index) => (
            <ListItem
              key={index}
              currentVideo={props.currentVideo}
              video={video}
              onClick={this.onClick}
              itemRef={instance => {
                this.refsCollection[video.id] = instance;
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Playlist;
