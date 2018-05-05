import React, { Component } from 'react';
import ListItem from './ListItem';

class Playlist extends Component {
  render() {
    const { props } = this;
    return (
      <div className="playlist">
        {props.videos.map((video, index) => (
          <ListItem key={index} video={video} loadVideo={props.loadVideo} />
        ))}
      </div>
    );
  }
}

export default Playlist;
