import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MovieApiServiceService } from './movie-api-service.service';
import { HttpClient } from '@angular/common/http';
import { SearchApiMock } from '../mocks/search-api.mock';
import { MoviesResult } from './movie-api.type';

describe('MovieApiServiceService', () => {
  let service: MovieApiServiceService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MovieApiServiceService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test bannerApiData', () => {
    const testData: MoviesResult = SearchApiMock;
    const reqUrl =
      'https://api.themoviedb.org/3/trending/all/week?api_key=a45d85ad251b0f0923bf984542c54ce3';
    httpClient
      .get<MoviesResult>(reqUrl)
      .subscribe((data) => expect(data).toEqual(testData));
    const req = httpTestingController.expectOne(reqUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();
  });
});
