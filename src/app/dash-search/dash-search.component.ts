import { ContactService } from '../contact.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-search',
  templateUrl: './dash-search.component.html',
  styleUrls: ['./dash-search.component.css']
})
export class DashSearchComponent {
  constructor(private contact: ContactService) {}

      bureau:any[]=[];

      name='';
      photo='';
      numero='';
      email='';
      show_member=false;
    

      searched_person='';
      persons:any[]=[
        
      ];

    ngOnInit(): void {
      this.bureau=this.contact.bureau;

    }

    show_persons=false;
     
conforme(ch1: string, ch2: string): boolean {
  const ch1SansEspaces = ch1.replace(/\s+/g, '').toLowerCase();
  const ch2SansEspaces = ch2.replace(/\s+/g, '').toLowerCase();

  let count = false;

  if (ch2SansEspaces!='' &&   ch1SansEspaces.includes(ch2SansEspaces)) {
    count=true
  }

  return count;
}

search() {
  console.log(this.bureau);
  this.persons = []; 
  

  this.bureau.forEach(membre => {
    if (this.conforme(membre.name, this.searched_person) == true) {
      this.persons.push(membre);
    }
  });

  this.show_persons = this.persons.length != 0;
  if(this.show_persons==true){
    const list = document.getElementById('searched_person');
    
    if(list){
      list.style.display='block';
    }
  }
  else{
    this.persons = []; 
  }

}

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



}
