import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    const { props } = this;
    return (
      <div className="listItem">
        <span>{props.video.name}</span>
      </div>
    );
  }
}

export default ListItem;
