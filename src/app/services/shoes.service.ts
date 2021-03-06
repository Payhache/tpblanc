import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Shoe } from '../models/shoe';
import { catchError, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root',
})
export class ShoesService {
  // Ajout du serveur qui contient toutes les chaussures et
  // Qui stockera toutes les données
  apiURL = 'http://localhost:3000/chaussures';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  // Création d'une fonction qui va récuperer toutes les chaussures
  // Sur le serveur
  getAllShoes(): Observable<Shoe[]> {
    return this.http
      .get<Shoe[]>(this.apiURL)
      .pipe(retry(1), catchError(this.handleError));
  }
  //Création d'une fonction qui va récuperer une seule chaussure via son id
  // Sur le serveur :
  getOneShoe(id: number): Observable<Shoe> {
    return this.http
      .get<Shoe>(this.apiURL + '/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }
  //Création d'une fonction pour update une chaussure
  // Sur le serveur :
  updateShoe(shoe: Shoe) {
    return this.http
      .put<Shoe>(this.apiURL + '/' + shoe.id, shoe, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  // EN cas d'erreure de communication avec le serveur
  handleError(error) {
    //déclaration d'une variable vide pour y associer un message d'erreur
    let errorMessage = '';
    // Si j'ai pas compris ....
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
