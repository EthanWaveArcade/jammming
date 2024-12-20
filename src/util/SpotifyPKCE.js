const clientId = '6cbf03576b5c42cf8d82b6925639d8ea'; // Insert client ID here.
const redirectUri = 'http://localhost:3000'; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.
const scope = 'playlist-modify-public';
const url = 'https://accounts.spotify.com/authorize';

let state = generateRandomString(16);

localStorage.setItem(stateKey, state);

