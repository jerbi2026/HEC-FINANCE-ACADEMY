import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendrierService {

  constructor(private http: HttpClient) {}
  connection_url_get='https://sheets.googleapis.com/v4/spreadsheets/1crpy4qskOIK6if0Y3rs7FP1FHyAsgy7wNA2zcbm0Q7k/values/Feuille%201?key=AIzaSyAuASNlIBt9OEPyvasG1jN4IxkiCWMqtTY';
  get_events(){
    return this.http.get(this.connection_url_get);
  }


  

  addEvent(title: string,  start: string|null, end: string|null, image: string,description: string, id:string) {
    const body = {
      feuille1: {
        title,
        start,
        end,
        image,
        description,
        id       
      },
    };


    return this.http.post('https://api.sheety.co/4f0868e0b02c7fab0b87e5857fbd9128/calendar/feuille1', body);
  }

  private baseUrl = 'https://api.sheety.co/4f0868e0b02c7fab0b87e5857fbd9128/calendar/feuille1';

  deleteRowByTitle(index: number) {
    let deleteUrl='';
    deleteUrl = `${this.baseUrl}/${index + 1}`; 
    return this.http.delete(deleteUrl);
    
  }

  edit_event(index:number,title: string,  start: string|null, end: string|null, image: string,description: string){
    let deleteUrl='';
    deleteUrl = `${this.baseUrl}/${index + 1}`; 
    const body = {
      feuille1: {
        title,
        start,
        end,
        image,
        description,
      },
    };
    return this.http.put(deleteUrl,body);

  }
}
