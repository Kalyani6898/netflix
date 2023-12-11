import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { LABEL } from './home.constant';
import { Result } from '../../service/movie-api.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
/**
 * For home page with carousal and movie list
 */
export class HomeComponent implements OnInit {
  labels = LABEL;
  constructor(private service: MovieApiServiceService, private title: Title) {
    this.title.setTitle('Home - Netflix');
  }

  bannerResult: Result[] = [];
  trendingMovieResult: Result[] = [];
  actionMovieResult: Result[] = [];
  adventureMovieResult: Result[] = [];
  animationMovieResult: Result[] = [];
  comedyMovieResult: Result[] = [];
  documentaryMovieResult: Result[] = [];
  sciencefictionMovieResult: Result[] = [];
  thrillerMovieResult: Result[] = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }

  // bannerdata
  bannerData(): void {
    this.service.bannerApiData().subscribe((result) => {
      this.bannerResult = result.results;
    });
  }
  // this.trendingMovieResult
  trendingData(): void {
    this.service.trendingMovieApiData().subscribe((result) => {
      this.trendingMovieResult = result.results;
    });
  }

  // action
  actionMovie(): void {
    this.service.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }

  // adventure
  adventureMovie(): void {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }

  // animation
  animationMovie(): void {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }

  // comedy
  comedyMovie(): void {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }

  // documentary
  documentaryMovie(): void {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    });
  }

  // science-fiction
  sciencefictionMovie(): void {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
    });
  }

  // thriller
  thrillerMovie(): void {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }
}
