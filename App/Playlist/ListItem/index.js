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
      <img className={styles.image} src={props.video.pictures.sizes[0].link} />
      <div>
        <h3 className={styles.title}>{props.video.name}</h3>
        <span>{props.video.user.name}</span>
      </div>
    </div>
  );
};

export default ListItem;
