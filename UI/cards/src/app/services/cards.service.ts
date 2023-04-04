import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  baseUrl =''

  constructor(private http: HttpClient) { }

  //Get all Cards
  getAllcards(){
    this.http.get('baseUrl');
  }
}
