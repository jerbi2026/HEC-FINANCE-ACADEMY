import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }
  
  private apiUrl = 'https://api.imgbb.com/1/upload'; // ImgBB API endpoint
  private apiKey = 'f55546bb61033efa3e7912aa9a88d443'; // Replace with your ImgBB API Key


  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('key', this.apiKey);

    return this.http.post(this.apiUrl, formData);
  }
}
