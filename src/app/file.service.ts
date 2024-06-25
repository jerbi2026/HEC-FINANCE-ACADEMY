import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) {}
  connection_url_get='https://sheets.googleapis.com/v4/spreadsheets/1mYMJH8fHd2Gy4qcKnJfPZBS4FHxb_x-BXnzqlrPu0OY/values/Feuille%201?key=AIzaSyAuASNlIBt9OEPyvasG1jN4IxkiCWMqtTY';
  get_documents(){
    return this.http.get(this.connection_url_get);
  }

  
  downloadFile(path:string): Observable<Blob> {
    return this.http.get(path, { responseType: 'blob' });
  }
}
