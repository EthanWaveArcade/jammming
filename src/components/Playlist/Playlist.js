import React, {useCallback } from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist(props) {

const handleChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
  );

  const newPlaylist = () => {
    if (props.playlistTracks.length === 0) {
        return <p>Add some tracks!</p>
    } else {
        return <Tracklist
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />
    }
  }

  return (
    <div className={styles.Playlist}>
    <label htmlFor="playlistinput">Playlist Name: </label>
      <input id="playlistinput" value={props.playlistName} onChange={handleChange}/>
      <h2>{props.playlistName}</h2>
      {newPlaylist()}
      <button className={styles.PlaylistSave} onClick={props.onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;