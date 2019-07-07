import { combineReducers } from 'redux';

const songs = [
  {
    title: 'No Scrubs',
    duration: '4:05',
  },
  {
    title: 'Taki Taki',
    duration: '5:00',
  },
  {
    title: 'Seven Nations',
    duration: '3:45',
  },
  {
    title: 'Solo',
    duration: '3:44',
  },
];

const songsReducer = () => {
  return songs;
};

const selectedSongReducer = (defaultSelected = null, action) => {
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload;
    default:
      return defaultSelected;
  }
};

export const rootReducer = combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
