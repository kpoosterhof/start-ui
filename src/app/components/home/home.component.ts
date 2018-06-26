import {MovieService} from '../../services/movie.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public movie;

  constructor(private mv: MovieService) {}

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    this.mv.getMovie().subscribe(
      data => {this.movie = data},
      err => console.error(err),
      () => console.log('movie loaded')
    );
  }
}
