import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { Title } from '@angular/platform-browser';
import { mockMovieApiService } from '../../mocks/movie-api-service.mock';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let titleService;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: MovieApiServiceService, useValue: mockMovieApiService },
        Title,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Home - Netflix'`, () => {
    titleService = TestBed.get(Title);
    expect(titleService.getTitle()).toEqual('Home - Netflix');
  });
});
