import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../models/commande';
import { Observable, Subject  } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sceances } from '../models/sceance';



const API_BASE_URL: string = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  

  constructor(private http : HttpClient) { }


  sauvegarderCommande(commande: Commande): Observable<Commande> {

   
   
    return this.http.post<Commande>(`${API_BASE_URL}Commande/Create`,  commande)
      
  }


  getCommande(): Observable<Commande[]>{

    return this.http.get<Commande[]>(`${API_BASE_URL}Commande`);
  }
}
