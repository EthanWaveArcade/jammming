import React  from 'react';
import styles from './Header.module.css';

function Header(props) {


    return (
        <header className={styles.Header}>
            <h1>Ja<span className={styles.Highlight}>mmm</span>ing</h1>
        {props.children}
        </header>
    )

}

export default Header;