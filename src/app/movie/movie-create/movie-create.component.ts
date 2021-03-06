import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../service/movie-service.service'
import { Movie } from 'src/app/models/movie';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  movie: Movie;
  registerFilm: FormGroup;
    submitted = false;
   Class: string;
   Response:string;


  constructor(private movieService : MovieService, private formBuilder: FormBuilder) {

   }

 
   ngOnInit() {
    


    this.registerFilm = this.formBuilder.group({
        nomFilm: ['', [Validators.required, Validators.minLength(2)]],
        nomFilmOriginal: ['', [Validators.required, Validators.minLength(2)]],
        description: ['', [Validators.required, Validators.minLength(2)]],
        afficheFilm: ['', [Validators.required, Validators.minLength(6)]],
        dateRealisation: ['', Validators.required],
        video : ['', [Validators.required, Validators.minLength(2)]],

       
    }, {
      
      
    });

    
}


get f() { return this.registerFilm.controls; }

onSubmit() {

  this.submitted=true;

   this.movieService.sauvegarderFilm(this.registerFilm.value).subscribe(ok => {
   
   this.Class = "alert alert-success";
   this.Response = "Le film à bien été enregistré";

  }, err =>  {console.log("film impossible à céer");
this.Class = "alert alert-danger";
this.Response = "Le film n'as pas pue être enregistré";
    });
  }
}