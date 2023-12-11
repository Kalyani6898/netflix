Hello All,

Following application is a clone application of Netflix. I have used Angular 14,
Bootstrap 5 and Jest for unit test cases.

Insight of application:-

1. I have created three pages i.e. Home,Movies,Search and Page Not Found.

2.On Home page, I have used different class of Bootstrap for the UI. Also you
can see image transformation on hovering the movie thumbnail.

3.For Backend API, I have used themoviedb database and APIs.

4. Navigation between pages is implemented using Angular Routes. I have also 
covered the concept of Wildcard Route and Page Not Found page is displayed for the same.

5.Apart from Routes, I have integrated HTTP calls using Service and Interceptor.

6.I have implemented Reactive Forms for Search page and also implemented validation 
of Required and no search result.

7.On Movie Details page, we can see the description and Cast&Crew information.

8.Also we can see the Trailer of selected movie by clicking Watch Trailer button.

9.You can see various screenshots and recording of application in netflix/app_screenshots folder.

Project System Reqiurement:-

Angular CLI: 14.2.13
Node: 20.10.0 
Package Manager: npm 9.2.0
Angular: 14.3.0

Backend information:-

API_KEY='a45d85ad251b0f0923bf984542c54ce3';
Trending Content='https://api.themoviedb.org/3/trending/all/week?api_key=a45d85ad251b0f0923bf984542c54ce3'
Trending Movie API='https://api.themoviedb.org/3/trending/movie/day?api_key=a45d85ad251b0f0923bf984542c54ce3'
Trending TV API='https://api.themoviedb.org/3/trending/tv/{time_window}'
Top Rated Movie API='https://api.themoviedb.org/3/movie/top_rated'
Top Rated TV API='https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1'
Search Movie='https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=${data.movieName}'
Search TV='https://api.themoviedb.org/3/search/tv'
Movie details='https://api.themoviedb.org/3/movie/{movie_id}'
Movie Credits='https://api.themoviedb.org/3/movie/{movie_id}/credits'
Movie Video='https://api.themoviedb.org/3/movie/{movie_id}/videos'
