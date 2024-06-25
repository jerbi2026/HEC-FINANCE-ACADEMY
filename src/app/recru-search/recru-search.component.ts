import { Component } from '@angular/core';
import { RecruteService } from '../recrute.service';

@Component({
  selector: 'app-recru-search',
  templateUrl: './recru-search.component.html',
  styleUrls: ['./recru-search.component.css']
})
export class RecruSearchComponent {
  constructor(private recrutement: RecruteService) {}

     
  recru_not_traited:string[]=[];
  recru:string[]=[];

    

      searched_person='';
      persons:any[]=[];

    ngOnInit(): void {
      this.recrutement.get_recrutement().subscribe(
        (data:any)=>{
          this.recru_not_traited=data.values;        
          for(let i =1 ; i<this.recru_not_traited.length;i++){
            this.recru.push(this.recru_not_traited[i]);
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
  

  this.recru.forEach(membre => {
    if (this.conforme(membre[2], this.searched_person) == true) {
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
