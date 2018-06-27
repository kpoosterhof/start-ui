import {MovieService} from '../../services/movie.service';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  movieform: FormGroup;
  validMessage: string = "";

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieform = new FormGroup({
      title: new FormControl('', Validators.required),
      director: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      yearOfRelease: new FormControl('', Validators.required)
    });
  }
  
  addMovie() {

    if (this.movieform.valid) {
      this.validMessage = 'The movie has been added.';
      this.movieService.addMovie(this.movieform.value).subscribe(
        data => {
          this.movieform.reset();
          return true;
        },
        error => {
          return throwError(new Error(error));
        }
      );
    } else {
      this.validMessage = 'Please fill out the form before submitting.';
    }
  }

}
