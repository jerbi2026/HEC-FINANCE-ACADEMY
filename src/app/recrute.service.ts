import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecruteService {

  constructor(private http: HttpClient) {}
  connection_url_get='https://sheets.googleapis.com/v4/spreadsheets/1r7ld33v-sSvSfG5l83-aM0RUexHvyOXf9xt_ONiIcUE/values/Feuille%201?key=AIzaSyAuASNlIBt9OEPyvasG1jN4IxkiCWMqtTY';
  get_recrutement(){
    return this.http.get(this.connection_url_get);
  }
}
