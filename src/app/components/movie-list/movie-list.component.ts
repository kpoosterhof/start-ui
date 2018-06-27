import { MovieService } from '../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public movies;

  constructor(private mv: MovieService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.mv.getMovies().subscribe(
      data => {this.movies = data},
      err => console.error(err),
      () => console.log('movies loaded')
    );
  }

}
