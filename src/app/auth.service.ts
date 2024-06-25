import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  
  secret_key='C25aG89sH63JdZpW';
 
  identified=true;



  encryptString(message: string, secretKey: string): string {
    const encryptedMessage = CryptoJS.AES.encrypt(message, secretKey).toString();
    return encryptedMessage;
  }
  decryptString(encryptedMessage: string, secretKey: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
    const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedMessage;
  }





  check_login(name: string, pass: string): Observable<boolean> {
  return this.http.get(`assets/test.txt`, { responseType: 'text' }).pipe(
    map((donnee: string) => {
      let lines: string[] = donnee.split(";");
      const decrypt_nom = this.decryptString(lines[0], this.secret_key);
      const decrypt_pass = this.decryptString(lines[1], this.secret_key);

      if (decrypt_nom.includes(name) && decrypt_pass.includes(pass)) {
        console.log("Connecté");
        this.identified = true;
      } else {
        console.log("Identifiant ou mot de passe incorrect");
        this.identified = false;
      }

      return this.identified;
    })
  );
}






}
