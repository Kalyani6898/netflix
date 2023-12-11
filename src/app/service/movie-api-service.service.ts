import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  MovieCastResult,
  MovieDetailsResult,
  MovieVideoResult,
  MoviesResult,
} from './movie-api.type';
@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  constructor(private http: HttpClient) {}

  baseurl: String = 'https://api.themoviedb.org/3';
  apikey: String = 'a45d85ad251b0f0923bf984542c54ce3';

  //bannerapidata

  bannerApiData(): Observable<MoviesResult> {
    return this.http.get<MoviesResult>(
      `${this.baseurl}/trending/all/week?api_key=${this.apikey}`
    );
  }

  // trendingmovieapidata
  trendingMovieApiData(): Observable<MoviesResult> {
    return this.http.get<MoviesResult>(
      `${this.baseurl}/trending/movie/day?api_key=${this.apikey}`
    );
  }

  // searchmovive
  getSearchMovie(data: any): Observable<MoviesResult> {
    return this.http.get<MoviesResult>(
      `${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`
    );
  }

  // getmoviedatails
  getMovieDetails(data: any): Observable<MovieDetailsResult> {
    return this.http.get<MovieDetailsResult>(
      `${this.baseurl}/movie/${data}?api_key=${this.apikey}`
    );
  }

  // getMovieVideo
  getMovieVideo(data: any): Observable<MovieVideoResult> {
    return this.http.get<MovieVideoResult>(
      `${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`
    );
  }

  // getMovieCast
  getMovieCast(data: any): Observable<MovieCastResult> {
    return this.http.get<MovieCastResult>(
      `${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`
    );
  }
  // action
  fetchActionMovies(): Observable<MoviesResult> {
    return this.http.get<MoviesResult>(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`
    );
  }

  // adventure
  fetchAdventureMovies(): Observable<MoviesResult> {
    return this.http.get<MoviesResult>(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`
    );
  }

  // animation
  fetchAnimationMovies(): Observable<MoviesResult> {
    return this.http.get<MoviesResult>(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`
    );
  }

  // comedy
  fetchComedyMovies(): Observable<MoviesResult> {
    return this.http.get<MoviesResult>(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`
    );
  }

  // documentary
  fetchDocumentaryMovies(): Observable<MoviesResult> {
    return this.http.get<MoviesResult>(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`
    );
  }

  // science-fiction:878

  fetchScienceFictionMovies(): Observable<MoviesResult> {
    return this.http.get<MoviesResult>(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`
    );
  }

  // thriller:53
  fetchThrillerMovies(): Observable<MoviesResult> {
    return this.http.get<MoviesResult>(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`
    );
  }
}
