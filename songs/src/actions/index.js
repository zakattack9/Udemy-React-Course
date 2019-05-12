// Action Creator
export const selectSong = song => { // named exports need {} when importing, default exports do not
  // returns an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
