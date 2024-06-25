import { RecruteService } from './../recrute.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-recrutement',
  templateUrl: './recrutement.component.html',
  styleUrls: ['./recrutement.component.css']
})
export class RecrutementComponent {
  p: number = 1;
  tab: number = 5;
  Recrutement_not_traited:string[]=[];
  recru:string[]=[];
  show_member=false;
  name='';
  email='';
  code='';
  
  constructor(private contacts:RecruteService,private cookieService: CookieService,private router: Router){};
  ngOnInit(): void {
    const isIdentified = this.cookieService.get('identified') === 'true';
    if (!isIdentified) {
      this.router.navigate([`/login`]);
    }
    this.contacts.get_recrutement().subscribe(
      (data:any)=>{
        
        this.Recrutement_not_traited=data.values;        
        for(let i =1 ; i<this.Recrutement_not_traited.length;i++){
          this.recru.push(this.Recrutement_not_traited[i]);
        }
        
      }
    )
    console.log(this.recru);
  }
  close_dialog(){
    this.show_member=false;
    this.name='';
    this.email='';
    this.code='';
  }
  open_member(nom :string, email:string  , code:string){
    this.name=nom;
    this.email=email;
    this.code=code;
    this.show_member=true;

  }
}
