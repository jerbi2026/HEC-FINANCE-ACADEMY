import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { actualite } from 'src/actualite';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  constructor(private http: HttpClient) {}
  connection_url_get='https://sheets.googleapis.com/v4/spreadsheets/1JxSvpl95MpISh4SwrQuRDO5fBXCkPABdvdLCA8IjN9E/values/Feuille%201?key=AIzaSyAuASNlIBt9OEPyvasG1jN4IxkiCWMqtTY';
  
  get_actualite(){
  return this.http.get(this.connection_url_get);
  }
  delete_contact(title:string){
    return this.http.delete('https://sheetdb.io/api/v1/pei57guggcl9i/Title/'+title);

  }
  add_actualite(new_act:actualite){
    return this.http.post('https://sheetdb.io/api/v1/pei57guggcl9i',new_act);

  }

  modify_actualite(edited_act:actualite){
    return this.http.put('https://sheetdb.io/api/v1/pei57guggcl9i/Title/'+edited_act.Title,edited_act);


  }
}
