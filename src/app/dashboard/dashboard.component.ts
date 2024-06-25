import { contact } from 'src/contact';
import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private contacts:ContactService,private cookieService: CookieService,private router: Router){};
  bureau :any = this.contacts.bureau;

  name='';
  photo='';
  numero='';
  email='';
  show_member=false;

  open_dialog(name:string,photo:string,num:string,email:string){
    this.name=name;
    this.photo=photo;
    this.numero=num;
    this.email=email;
    this.show_member=true;

  }
  close_dialog(){
    this.name='';
    this.photo='';
    this.numero='';
    this.email='';
    this.show_member=false;

  }


  p: number = 1;
  tab: number = 5;
  messages:string[]=[];
  messages_to_trait:string[]=[];
  ngOnInit(): void {
    const isIdentified = this.cookieService.get('identified') === 'true';
    if (!isIdentified) {
      this.router.navigate([`/login`]);
    }
    
    
    const loader  = document.getElementById('loader_div');
    const dash = document.getElementById('stats');
    if(loader && dash){
      loader.style.display='block';
      dash.style.display='none';
    }
    
    this.contacts.get_contacts().subscribe(
      (data: any) => {
        this.messages.splice(0, this.messages.length);
        this.messages_to_trait = data.values;
        for (let i = 1; i < this.messages_to_trait.length; i++) {
          this.messages.push(this.messages_to_trait[i]);
        }
        if(loader && dash){
          loader.style.display='none';
          dash.style.display='block';
        }
    
    
        
        

      },
      (error: any) => {
        console.error('Erreur lors de la requête :', error);
      }
    );
   
  }

  delete_contact(index:number){
   
    const loader  = document.getElementById('loader_div');
    const dash = document.getElementById('stats');
    if(loader && dash){
      loader.style.display='block';
      dash.style.display='none';
    }
    
    this.contacts.delete_contact(index+2).subscribe(
      (data)=>{
        
        if(loader && dash){
          loader.style.display='none';
          dash.style.display='block';
        }
        this.ngOnInit();
      }
    )
   

  }


}
