import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { mockMovieApiService } from '../../mocks/movie-api-service.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { getMovieDetailsByIdMock } from '../../mocks/getMovieDetails-api.mock';
import { getMovieVideoDetailsMock } from '../../mocks/getMovieVideo-api.mock';
import { getMovieCastDetailsMock } from '../../mocks/getMovieCast-api.mock';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MovieDetailsComponent],
      providers: [
        { provide: MovieApiServiceService, useValue: mockMovieApiService },
        Title,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                id: '1',
              }),
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get paramId equal to 1', () => {
    component.getParamId = 'asd';
    component.ngOnInit();
    expect(component.getParamId).toEqual('1');
  });

  it('should get paramId equal to 1', () => {
    component.getVideo('466420');
    expect(component.getMovieVideoResult).toEqual('EG0si5bSd6I');
  });
});
