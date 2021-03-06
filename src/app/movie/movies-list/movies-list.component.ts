import { Component, OnInit, ɵqueryRefresh } from '@angular/core';
import { MovieService } from '../../service/movie-service.service';
import { Movie } from '../../models/movie';
import { SceanceService } from '../../service/sceance.service';
import { Sceances } from '../../models/sceance';
import { observable, Observable } from 'rxjs';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  
})


export class MoviesListComponent implements OnInit {
  movies : Movie[];
  movie : Movie;
  idFilmNumber:number;
  Class: string;
  Response:string;


  constructor(private movieService: MovieService, private sceanceService : SceanceService) { 
    
  }

  ngOnInit() {
    this.movieService.findAll().subscribe(Tabmovies =>{this.movies = Tabmovies;
      this.Class = "alert alert-success";
      this.Response = "récupération des films via tmdb Movie";
    },
     error => {console.log("Problème avec la récupération des films ....");
    this.Class = "alert alert-danger";
    this.Response = "problème de récupération des films ....";
  });
    this.movieService.filmObs.subscribe(filmRecup => this.movies.push(filmRecup));
    
  }

  onDelete(idFilm:string){

    this.idFilmNumber = Number (idFilm);
    
    this.movieService.deleteFilmById(this.idFilmNumber).subscribe(ok =>{console.log("le film à été supprimé");
    this.Class = "alert alert-success";
    this.Response = "Le film à bien été supprimé";
    this.movieService.findAll().subscribe(Tabmovies =>this.movies = Tabmovies);

}, err=> {console.log("le film à pas été supprimé ....");
this.Class = "alert alert-danger";
this.Response = "Le film n'as pas été supprimé";
    });
  }

  
}

