import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    const { props } = this;
    return (
      <div
        className="listItem"
        onClick={() => props.onClick(props.video)}
        ref={props.itemRef}
      >
        <img src={props.video.pictures.sizes[1].link} />
        <span>{props.video.name}</span>
      </div>
    );
  }
}

export default ListItem;
