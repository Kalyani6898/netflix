import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { SearchComponent } from './search.component';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { mockMovieApiService } from '../../mocks/movie-api-service.mock';
import {
  SearchApiMock,
  SearchApiMockWithNoResult,
} from '../../mocks/search-api.mock';
import { of } from 'rxjs';
import { MoviesResult } from 'src/app/service/movie-api.type';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let service: MovieApiServiceService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [
        { provide: MovieApiServiceService, useValue: mockMovieApiService },
        Title,
      ],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(MovieApiServiceService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('submitForm positive scenario', () => {
    it('should check submitForm for invalid form', () => {
      component.isValidInput = true;
      component.searchForm.setValue({ movieName: null });
      component.submitForm();
      expect(component.isValidInput).toBeFalsy();
    });
    it('should check submitForm for valid form and movie found', () => {
      component.isValidInput = true;
      component.searchForm.patchValue({ movieName: 'Barbie' });
      component.submitForm();
      expect(component.searchResult).toEqual(SearchApiMock.results);
    });
  });
  describe('submitForm negative scenario', () => {
    it('should check submitForm for valid form and movie not found', () => {
      component.isMovieFound = true;
      mockMovieApiService.getSearchMovie = jest
        .fn()
        .mockReturnValue(of(SearchApiMockWithNoResult));
      component.searchForm.patchValue({ movieName: 'ASD' });
      component.submitForm();
      expect(component.isMovieFound).toBeFalsy();
    });
  });
});
