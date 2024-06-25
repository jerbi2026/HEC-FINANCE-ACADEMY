import { AgService } from './../ag.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag',
  templateUrl: './ag.component.html',
  styleUrls: ['./ag.component.css']
})
export class AgComponent implements OnInit {
  constructor (private AgService : AgService){}
  chartbar:any[]=[];
  data_trait:any[]=[];
  nb_pour=0;
  nb_non=0;
  nb_neutre=0;
  ngOnInit(): void {
    this.AgService.get_votes().subscribe(
      (data:any)=>{
        this.data_trait=data.values;
        for(let i = 0;i<this.data_trait.length;i++){
          if(this.data_trait[i][0]=="pour"){
            this.nb_pour++;
          }
          else{
            if(this.data_trait[i][0]=="contre"){
              this.nb_non++;
            }
            else{
              if(this.data_trait[i][0]=="Abstention"){
                this.nb_neutre++;
              }
            }
          }

        }
        console.log(this.nb_neutre+"               "+this.nb_non+"                "+this.nb_pour);
        this.chartbar=[
          {
            name:"Pour",
            value:this.nb_pour
          },
          {
            name:"Contre",
            value:this.nb_non
          },
          {
            name:"Neutre",
            value:this.nb_neutre
          },
        ]
      }
    )


  }
}
