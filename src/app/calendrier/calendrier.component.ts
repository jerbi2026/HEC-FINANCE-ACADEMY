import { ImageService } from './../image.service';
import { CalendrierService } from './../calendrier.service';
import { Component ,OnInit } from '@angular/core';

import * as FullCalendar from 'fullcalendar';
import { EventInput } from 'fullcalendar';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit{

  show_event=false;

  calendar: any;
  constructor(private CalendrierService:CalendrierService,public datepipe: DatePipe,private ImageService:ImageService){}
  even_not_traited:string[]=[];
  even:string[]=[];
  events: EventInput[] = [];
  show_add=false;
  id=0;
  title='';
  image='assets/image/default.png';
  start_day:string|undefined='';
  end_day:string|undefined='';
  description='';

  start_day_add:Date=new Date();
  end_day_add:Date=new Date();

  ngOnInit() {

    
    this.even_not_traited=[];
    this.even=[];
    this.events= [];
    this.CalendrierService.get_events().subscribe(
      (data:any)=>{
        this.even_not_traited=data.values;        
        for(let i =1 ; i<this.even_not_traited.length;i++){
          this.even.push(this.even_not_traited[i]);
        }
        this.even.forEach((data) => {
          let event:EventInput={};
          event.title=data[0];

          event.start=data[1];
          event.end=data[2];

          this.events.push(event);
        });
       
        this.initializeCalendar();
        
      }
    )
  }
  evenement: string[]=[];


  initializeCalendar() {
   
    const calendarEl = document.getElementById('calendar');
    if(calendarEl)
    this.calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ interactionPlugin, dayGridPlugin,bootstrapPlugin ],
      headerToolbar: {
        left: 'prev,next today',
        center:'title',
        right: 'dayGridMonth'
      },

     themeSystem: 'bootstrap', 
      selectable: true,
      
      eventColor: '#444546',
      eventDisplay:'block',

      eventClick: (info) => {
        this.title=info.event.title;
        this.start_day=info.event.start?.toLocaleDateString();
        this.end_day=info.event.end?.toLocaleDateString();
        const matchingItem = this.even.find(item => item[0] === this.title);

        if (matchingItem) {
         this.image = matchingItem[3];
          this.description = matchingItem[4];
          this.id=parseInt(matchingItem[5]);
        }
        
        
        this.show_event=true;

  

      },
      height: 600,

      
      
      initialView: 'dayGridMonth',
      events:this.events 
    });
    this.calendar.render();
  }


 
  close_dialog(){
    this.title='';
    this.image='assets/image/default.png';
    this.start_day='';
    this.end_day='';
    this.description='';
    this.show_event=false;

  }


  add_event(){
    const new_event = document.getElementById('new_event');
    const calendrier  = document.getElementById('calendar');
    if(new_event && calendrier ){
      new_event.style.display='block';
      calendrier.style.display='none';
    }
    
  }



  
  
  



onFileSelected(event: any) {
  const file = event.target.files[0];
  const new_event = document.getElementById('new_event');
  const loader = document.getElementById('loader');
  if(new_event && loader){
    loader.style.display='block';
    new_event.style.display='none';
  }

  if (file) {
    this.ImageService.uploadImage(file).subscribe(
      (response: any) => {
        console.log('Image uploaded successfully:', response);
        this.image= response.data.display_url;
        if(new_event && loader){
          loader.style.display='none';
          new_event.style.display='block';
        }

       
      },
      (error) => {
        console.error('Error uploading image:', error);
        
      }
    );
  }
  }




  formatDateToString(date: Date): string | null  {
    let latest_date =this.datepipe.transform(date, 'yyyy-MM-dd');
    return latest_date;
    
  }
  














  addEvent(title: string, description: string, start_day_add: Date, end_day_add: Date, image: string) {
    if(title!=''){

      const new_event = document.getElementById('new_event');
      const loader = document.getElementById('loader');
      const calendrier  = document.getElementById('calendar');
      if(new_event && loader && calendrier){
        loader.style.display='block';
        new_event.style.display='none';
        calendrier.style.display='none';

      }
      
      this.CalendrierService.get_events().subscribe(
        (data:any)=>{
          this.even_not_traited=data.values;        
          for(let i =1 ; i<this.even_not_traited.length;i++){
            this.even.push(this.even_not_traited[i]);
          }
          this.id=parseInt(this.even[this.even.length-1][5])+1;
          
        this.CalendrierService.addEvent(title, this.formatDateToString(start_day_add),this.formatDateToString(end_day_add), image, description,this.id.toString())
          .subscribe((data) => {
            if(new_event && loader && calendrier){
              loader.style.display='none';
              new_event.style.display='none';
              calendrier.style.removeProperty('display');
      
            }
          console.log('Événement ajouté avec succès', data);
          this.ngOnInit();
        }, (error) => {
        console.error('Erreur lors de l\'ajout de l\'événement', error);
        });
         
        }
      )

    }
    else{
      alert("veuillez ajouter un title ");
    }
   
    

    

  
    
}





  annuler(){
    this.id=0;
    this.title='';
    this.description='';
    this.end_day_add=new Date();
    this.start_day_add=new Date();
    this.image='assets/image/default.png';
    const new_event = document.getElementById('new_event');
    const calendrier  = document.getElementById('calendar');
    if(new_event && calendrier){
      new_event.style.display='none';
      calendrier.style.removeProperty('display');

    }


  }



  delete_event(id:string){
    const loader = document.getElementById('loader');
    const calendrier  = document.getElementById('calendar');
    const dialog = document.getElementById('dialog');
    if( loader && calendrier && dialog){
      loader.style.display='block';
      calendrier.style.display='none';
      dialog.style.display='none';

    }
   
     this.CalendrierService.get_events().subscribe(
      (data: any) => {
        console.log(data);
        console.log(data.values);
        let index = -1;

        data.values.forEach((row: string[], i: number) => {
          if (row[0] === id) {
            index = i;
          }
        });

        this.CalendrierService.deleteRowByTitle(index).subscribe(
          (data:any)=>{
            console.log(data);
            if(  loader && calendrier && dialog){
              loader.style.display='none';
              calendrier.style.removeProperty('display');
              dialog.style.removeProperty('display');
      
            }
            this.ngOnInit();
          }
          
        )

       
       
      }
    );
    

    

  }


  
  

  
  









}
