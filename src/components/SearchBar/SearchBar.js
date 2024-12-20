import React, { useState, useCallback } from "react";
import styles from './SearchBar.module.css';

const SearchBar = (props) => {

    const [term, setTerm] = useState("");

    const handleChange = useCallback((event) => {
        setTerm(event.target.value);
      }, []);

    const search = useCallback((e) => {
        e.preventDefault(); 
        if (!term) {
          return window.alert("Please enter a search term");
        }   
        props.onSearch(term);
      }, [props.onSearch, term]);

    return (
        <div className={styles.SearchBar}>
            <form>
            <input id="search" placeholder="Enter A Song, Album, or Artist" onChange={handleChange}/>
            <input className={styles.SearchButton} onClick={search} type="submit" htmlFor="search"/>
            </form>
        </div>
    )
}

export default SearchBar;