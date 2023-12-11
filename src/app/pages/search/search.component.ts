import { Component, Directive } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { LABELS } from './search.constant';
import { Result } from '../../service/movie-api.type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

/**
 * this component is for search page and to load search data
 * used reactive forms with required validation
 * implemented for no movie found also.
 */
export class SearchComponent {
  searchResult: Result[] = [];
  isMovieFound: boolean = true;
  isValidInput = true;
  labels = LABELS;
  searchForm = new FormGroup({
    movieName: new FormControl('', Validators.required),
  });
  constructor(
    private movieService: MovieApiServiceService,
    private title: Title
  ) {
    this.title.setTitle('Search movies - Netflix');
  }

  submitForm(): void {
    if (this.searchForm.status === 'INVALID') {
      this.isValidInput = false;
    } else if (
      !!this.searchForm.value.movieName &&
      this.searchForm.status === 'VALID'
    ) {
      this.isValidInput = true;
      this.movieService
        .getSearchMovie(this.searchForm.value)
        .subscribe((result) => {
          if (result.results.length > 0) {
            this.isMovieFound = true;
            this.searchResult = result.results;
          } else {
            this.isMovieFound = false;
          }
        });
    }
  }
}
