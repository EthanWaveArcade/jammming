import './App.css';
import React, { useState, useCallback, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
//import Button from '../Button/Button';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Spotify from '../../util/Spotify';


function App() {

  // let trackLibrary = [
  //   {
  //     id: 1,
  //     name: 'Tiny Dancer',
  //     artist: 'Elton John',
  //     album: 'Madman Across The Water',
  //     uri: 'spotify:track:0Q9kZk0oBZd0n8i4zFz0yf'
  //   },
  //   {
  //     id: 2,
  //     name: 'Should\'ve Been A Cowboy',
  //     artist: 'Tim McGraw',
  //     album: 'Love Story',
  //     uri: 'spotify:track:0Q9kZk0oBZd0n8i4zFz0yf'
  //   },
  //   {
  //     id: 3,
  //     name: 'Tiny Dancer',
  //     artist: 'Rockabye Baby!',
  //     album: 'Lullaby Renditions of Elton John',
  //     uri: 'spotify:track:0Q9kZk0oB',
  //   },
  //   {
  //     id: 4,
  //     name: 'Boyz in the Hood',
  //     artist: 'Ben Folds',
  //     album: 'Ben Folds Live',
  //     uri: 'spotify:track:0Q9kZk0oBZd0n8i4zFz0yf'
  //   }
  // ];

  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [loggedIn, setLoggedIn] = useState(false);
  // const search = (term) => {
  //   setSearchResults(trackLibrary.map(track => ({
  //     ...track,
  //     isInPlaylist: playlistTracks.some(playlistTrack => playlistTrack.id === track.id)
  // })).filter(track => 
  //     track.name.toLowerCase().includes(term.toLowerCase()) || 
  //     track.artist.toLowerCase().includes(term.toLowerCase())
  // ));
  // }

//   useEffect(() => {
//     checkAuth().then(token => {
//         if (token) {
//             setLoggedIn(true);
//         }
//     }).catch(error => {
//         console.error(error);
//     });
// }, []);

const searchTracks = useCallback((term) => {
          Spotify.search(term).then(setSearchResults);

}, []);


  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylistTracks = useCallback(() => {
    const trackUris = playlistTracks.map(track => track.uri);
            Spotify.savePlaylist(playlistName, trackUris);
            setPlaylistName("New Playlist");
            setPlaylistTracks([]);
}, [playlistName, playlistTracks]);

  const addTrack = useCallback((track) => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    track.isInPlaylist = true;
    //setSearchResults(searchResults.filter(searchedTrack => searchedTrack.id !== track.id));
  }, [playlistTracks]);

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
    track.isInPlaylist = false;
  }, []);

  return (
    <>
  <Header>
  <SearchBar onSearch={searchTracks}/>
  <p>{loggedIn}</p>
  </Header>
  <main>
    <SearchResults searchResults={searchResults} onAdd={addTrack}/>
    <Playlist 
               playlistName={playlistName}
               playlistTracks={playlistTracks}
               onNameChange={updatePlaylistName}
               onRemove={removeTrack}
               onSave={savePlaylistTracks}
              />
  </main>
  <Footer />
    </>
  );
}

export default App;
