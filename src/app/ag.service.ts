import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgService {

  constructor(private http:HttpClient) { }
  connection_url_get='https://sheets.googleapis.com/v4/spreadsheets/1kHpT2YpZgUGZMhCGkU0F8NH1TBygKi78K1fQ9Q65CYo/values/Feuille%201?key=AIzaSyAuASNlIBt9OEPyvasG1jN4IxkiCWMqtTY';
  get_votes(){
    return this.http.get(this.connection_url_get);
  }
}
