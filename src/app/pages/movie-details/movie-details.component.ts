import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { LABELS } from './movie-details.constant';
import { Cast, MovieDetailsResult } from '../../service/movie-api.type';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
/**
 * For displaying movie details with cast and trailer
 */
export class MovieDetailsComponent implements OnInit {
  getMovieDetailResult: MovieDetailsResult | undefined;
  getMovieVideoResult: String = '';
  getMovieCastResult: Cast[] = [];
  labels = LABELS;
  getParamId: String | null = '';
  constructor(
    private service: MovieApiServiceService,
    private router: ActivatedRoute,
    private title: Title
  ) {}

  ngOnInit(): void {
    // get ID from params
    this.getParamId = this.router.snapshot.paramMap.get('id');
    if (!!this.getParamId) {
      this.getMovie(this.getParamId);
      this.getVideo(this.getParamId);
      this.getMovieCast(this.getParamId);
    }
  }

  /**
   *
   * @param id : Movie ID which is selected
   * For searching movie details
   */
  getMovie(id: String): void {
    this.service.getMovieDetails(id).subscribe(async (result) => {
      this.getMovieDetailResult = await result;

      // updatetitle
      this.title.setTitle(
        `${this.getMovieDetailResult?.original_title} | ${this.getMovieDetailResult?.tagline}`
      );
    });
  }

  /**
   * For fetching trailer video
   * @param id :  Movie ID which is selected
   */
  getVideo(id: String): void {
    this.service.getMovieVideo(id).subscribe((result) => {
      result.results.forEach((element: any) => {
        if (element.type == this.labels.TRAILER) {
          this.getMovieVideoResult = element.key;
        }
      });
    });
  }
  /**
   * For fetching cast and crew info
   * @param id :  Movie ID which is selected
   */
  getMovieCast(id: String): void {
    this.service.getMovieCast(id).subscribe((result) => {
      this.getMovieCastResult = result.cast;
    });
  }
}
