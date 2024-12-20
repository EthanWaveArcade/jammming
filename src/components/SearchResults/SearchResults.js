import React from 'react';
import styles from './SearchResults.module.css'
import Tracklist from '../Tracklist/Tracklist';

function SearchResults(props) {
    return (
        <div className={styles.SearchResults}>
            <Tracklist tracks={props.searchResults} onAdd={props.onAdd}/>
            {/* You will add a map method that renders a set of Track components */}
        </div>
    )
}

export default SearchResults;