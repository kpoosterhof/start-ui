import {MovieService} from '../../services/movie.service';
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public movie;

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getMovie(this.route.snapshot.params.id);
  }

  getMovie(id: number) {
    this.movieService.getMovie(id).subscribe(
      data => {this.movie = data},
      err => console.error(err),
      () => console.log('movie loaded')
    );
  }
}
