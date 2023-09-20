import axios from 'axios';

// base url to make requests to the movie database
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});
export default instance;

// BEM
// axios
// backgroundSize: 'cover'
// backgroundImage: `url(
//       'https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`
// backgroundPosition: 'center center';
