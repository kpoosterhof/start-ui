import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}

  getMovie(id: number) {
    return this.http.get('/server/movies/' + id,
      httpOptions
    );
  }

  addMovie(movie) {
    let body = JSON.stringify(movie)
    return this.http.post('/server/movies', body, httpOptions);
  }

  getMovies() {
    return this.http.get('/server/movies');
  }
}
