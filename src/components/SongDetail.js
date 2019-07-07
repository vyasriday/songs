import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <h4>Select a Song</h4>;
  }
  return (
    <div>
      <h1>Song Details</h1>
      <h3>{song.title}</h3>
      <h3>{song.duration}</h3>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
