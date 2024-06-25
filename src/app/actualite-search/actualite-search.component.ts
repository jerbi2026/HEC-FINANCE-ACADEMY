import { Component } from '@angular/core';
import { ActualiteService } from '../actualite.service';

@Component({
  selector: 'app-actualite-search',
  templateUrl: './actualite-search.component.html',
  styleUrls: ['./actualite-search.component.css']
})
export class ActualiteSearchComponent {

  
  constructor(private actualite: ActualiteService) {}

     
  actualites_not_traited:string[]=[];
  actualites:string[]=[];

    

      searched_person='';
      persons:any[]=[];

    ngOnInit(): void {
      this.actualite.get_actualite().subscribe(
        (data:any)=>{
          this.actualites_not_traited=data.values;        
          for(let i =1 ; i<this.actualites_not_traited.length;i++){
            this.actualites.push(this.actualites_not_traited[i]);
          }
          
        }
      )
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
  this.persons = []; 
  

  this.actualites.forEach(membre => {
    if (this.conforme(membre[0], this.searched_person) == true) {
      this.persons.push(membre);
    }
  });
  console.log(this.persons);

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


}
