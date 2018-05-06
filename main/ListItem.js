import React, { Component } from 'react';
import styles from './ListItem.css';

const ListItem = props => {
  return (
    <div
      className={styles.listItem}
      onClick={() => props.onClick(props.video)}
      ref={props.itemRef}
    >
      {props.video.id === props.currentVideo.id && (
        <span className={styles.playIcon}>&#9658;</span>
      )}
      <img className={styles.image} src={props.video.pictures.sizes[1].link} />
      <span className={styles.title}>{props.video.name}</span>
    </div>
  );
};

export default ListItem;
