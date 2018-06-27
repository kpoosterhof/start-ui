import { MovieService } from '../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { throwError } from 'rxjs';

@Component( {
    selector: 'app-movie-form',
    templateUrl: './movie-form.component.html',
    styleUrls: ['./movie-form.component.css']
} )
export class MovieFormComponent implements OnInit {
    movieform: FormGroup;
    validMessage: string = "";

    constructor( private movieService: MovieService ) { }

    ngOnInit() {
        this.movieform = new FormGroup( {
            title: new FormControl( '', { validators: [Validators.required, Validators.maxLength( 255 )] } ),
            director: new FormControl( '', { validators: [Validators.required, Validators.maxLength( 255 ), Validators.pattern( '^([^0-9]*)$' )] } ),
            genre: new FormControl( '', { validators: [Validators.required, Validators.maxLength( 255 )] } ),
            yearOfRelease: new FormControl( '', { validators: [Validators.required, Validators.min( 1878 ), Validators.max( this.getCurrentYear() )] } )
        } );
    }

    addMovie() {

        if ( this.movieform.valid ) {
            this.validMessage = 'The movie has been added.';
            this.movieService.addMovie( this.movieform.value ).subscribe(
                data => {
                    this.movieform.reset();
                    return true;
                },
                error => {
                    return throwError( new Error( error ) );
                }
            );
        } else {
            this.validMessage = 'Please fill out the form before submitting.';
        }
    }

    getCurrentYear() {
        let date = new Date();
        return date.getFullYear();
    }

}
