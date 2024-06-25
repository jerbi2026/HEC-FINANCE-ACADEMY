import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  bureau:any=[
    {
      name:"Mohamed Houssein Cherif",
      photo:"assets/image/houssein.jpg",
      numero:"",
      email:""
    },
    {
      name:"Ben Hassine Hanine",
      photo:"assets/image/hanine.jpg",
      numero:"",
      email:""
    },
    {
      name:"Ayachi Sahar",
      photo:"assets/image/ayachi.jpg",
      numero:"",
      email:""
    },
    {
      name:"Makhlouf Yahia",
      photo:"assets/image/yahia.jpg",
      numero:"",
      email:""
    },
    {
      name:"Elyousfi Azza",
      photo:"assets/image/azza.jpg",
      numero:"",
      email:""
    },
    {
      name:"Gdhami Ilef",
      photo:"assets/image/ilef.jpg",
      numero:"",
      email:""
    },
    {
      name:"Manai Imene",
      photo:"assets/image/imene.jpg",
      numero:"",
      email:""
    },
    {
      name:"Bouguerra Ahmed",
      photo:"assets/image/bouguera.jpg",
      numero:"",
      email:""
    },
    {
      name:"Jerbi Ahmed",
      photo:"assets/image/jack01.jpg",
      numero:"50 978 505",
      email:"jerbiahmed24@gmail.com"
    },

  ]

  constructor(private http : HttpClient) { }
  connection_url='https://sheets.googleapis.com/v4/spreadsheets/1Z9MOhHZjPoObVVRvVvm_71eZOYOtYD4IKq42kH50qFw/values/Feuille%201?key=AIzaSyAuASNlIBt9OEPyvasG1jN4IxkiCWMqtTY';
  get_contacts(){
    return this.http.get(this.connection_url);
  }

  spreadsheetId = '1Z9MOhHZjPoObVVRvVvm_71eZOYOtYD4IKq42kH50qFw';

  // Définissez vos en-têtes ici
  headers = new HttpHeaders({
    'Authorization': 'Bearer Evql9S-5E4rp_AwpD0B4UTsVtWye5BypzccMvF5UwjIUrsDEjUFNkYtOaME',
    'X-Spreadsheet-Id': this.spreadsheetId,
    'Content-Type': 'application/json'
  });

  delete_contact(email:number){
    const url = `https://api.sheetson.com/v2/sheets/Feuille 1/${email}`;
    return this.http.delete(url, { headers: this.headers });
  }
}
