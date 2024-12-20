import React, {useCallback} from 'react';
import styles from './Track.module.css';
import Button from '../Button/Button';

function Track(props) {

    const addTrack = useCallback(
        () => {
          props.onAdd(props.track);
        },
        [props.onAdd, props.track]
      );

    const removeTrack = useCallback(
        () => {
          props.onRemove(props.track);
        },
        [props.onRemove, props.track]
      );

    const buttonType = () => {
        if (props.isRemoval) {
            return <button onClick={removeTrack} className={styles.TrackAction}>-</button>;
        } else {
            return <button onClick={addTrack} className={styles.TrackAction}>+</button>;
        }
    }

    const trackStyle = () => {
        if (!props.isRemoval && props.track.isInPlaylist) {
            return `${styles.track} ${styles.inPlaylist}`;
        } else {
            return `${styles.track}`;
        }
    }   

    return (
        <div className={trackStyle()}>
            <div className={styles.TrackInformation} key={props.track.id}>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {buttonType()}
            
        </div>
    )
}

export default Track;