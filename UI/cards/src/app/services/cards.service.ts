import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  baseUrl ='https://localhost:7106/api/cards'

  constructor(private http: HttpClient) { }

  //Get all Cards
  getAllcards(): Observable<Card>{
    return this.http.get<Card>('this.baseUrl');
  }
}
