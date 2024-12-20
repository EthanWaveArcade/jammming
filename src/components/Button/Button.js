import React from 'react';
import styles from './Button.module.css';

function Button(props) {
    return (
        <button className={styles.Button} onClick={props.onClick} >{props.buttonType}</button>
    )
}

export default Button;