import React, { Component } from 'react';
import styles from './VideoInfo.css';

const VideoInfo = props => {
  return (
    <div className={styles.videoInfo}>
      <h1 className={styles.title}>{props.video.name}</h1>
      <p className={styles.description}>{props.video.description}</p>
      <span className={styles.show}> Read more... </span>
    </div>
  );
};

export default VideoInfo;
