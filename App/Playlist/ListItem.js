import React, { Component } from 'react';
import styles from './ListItem.css';

const ListItem = props => {
  return (
    <button
      className={styles.listItem}
      onClick={() => props.onClick(props.video)}
      ref={props.itemRef}
      data-video-id={props.video.id}
      data-test-id="ListItem"
    >
      {props.video.id === props.currentVideo.id && (
        <span className={styles.playIcon}>&#9658;</span>
      )}
      <img
        className={styles.image}
        alt={props.video.name}
        src={props.video.pictures.sizes[0].link}
      />
      <div>
        <h3 className={styles.title}>{props.video.name}</h3>
        <span>{props.video.user.name}</span>
      </div>
    </button>
  );
};

export default ListItem;
