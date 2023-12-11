import { of } from 'rxjs';
import { SearchApiMock } from './search-api.mock';
import { getMovieVideoDetailsMock } from './getMovieVideo-api.mock';
import { getMovieCastDetailsMock } from './getMovieCast-api.mock';
import { getMovieDetailsByIdMock } from './getMovieDetails-api.mock';

export const mockMovieApiService = {
  bannerApiData: jest.fn().mockReturnValue(of(1)),
  trendingMovieApiData: jest.fn().mockReturnValue(of(1)),
  getSearchMovie: jest.fn().mockReturnValue(of(SearchApiMock)),
  getMovieDetails: jest.fn().mockReturnValue(of(getMovieDetailsByIdMock)),
  getMovieVideo: jest.fn().mockReturnValue(of(getMovieVideoDetailsMock)),
  getMovieCast: jest.fn().mockReturnValue(of(getMovieCastDetailsMock)),
  fetchActionMovies: jest.fn().mockReturnValue(of(1)),
  fetchAdventureMovies: jest.fn().mockReturnValue(of(1)),
  fetchAnimationMovies: jest.fn().mockReturnValue(of(1)),
  fetchComedyMovies: jest.fn().mockReturnValue(of(1)),
  fetchDocumentaryMovies: jest.fn().mockReturnValue(of(1)),
  fetchScienceFictionMovies: jest.fn().mockReturnValue(of(1)),
  fetchThrillerMovies: jest.fn().mockReturnValue(of(1)),
};
