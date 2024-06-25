import { CalendrierService } from './../calendrier.service';
import { Component, OnInit } from '@angular/core';

import * as FullCalendar from 'fullcalendar';
import { EventInput } from 'fullcalendar';

import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

import bootstrapPlugin from '@fullcalendar/bootstrap';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';





@Component({
  selector: 'app-dash-calendrier',
  templateUrl: './dash-calendrier.component.html',
  styleUrls: ['./dash-calendrier.component.css']
})
export class DashCalendrierComponent implements OnInit {

  show_event=false;

  calendar: any;
  constructor(private CalendrierService:CalendrierService){}
  even_not_traited:string[]=[];
  even:string[]=[];
  events: EventInput[] = [];


  title='';
  image='';
  start_day:string|undefined='';
  end_day:string|undefined='';
  description='';

  ngOnInit() {
    this.CalendrierService.get_events().subscribe(
      (data:any)=>{
        console.log(data);
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
        console.log(this.even);
        this.initializeCalendar();
      }
    )
  }
  evenement: string[]=[];


  initializeCalendar() {
   
    const calendarEl = document.getElementById('calendar');
    if(calendarEl)
    this.calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ interactionPlugin, dayGridPlugin,bootstrap5Plugin ],
      themeSystem: 'bootstrap5', 
      headerToolbar:{
        start: 'title',
        center: '',
        end: ''
      },
      
      selectable: true,
      editable: true,
      eventColor: '#005CFE',
      eventDisplay:'block',

      eventClick: (info) => {
        this.title=info.event.title;
        this.start_day=info.event.start?.toLocaleDateString();
        this.end_day=info.event.end?.toLocaleDateString();
        const matchingItem = this.even.find(item => item[0] === this.title);

        if (matchingItem) {
         this.image = matchingItem[3];
          this.description = matchingItem[4];
        }
        
        
        this.show_event=true;  
        info.el.style.background = 'dark';

      },
      height: 650,

      
      
      initialView: 'listWeek',
      events:this.events 
    });
    this.calendar.render();
  }


 
  close_dialog(){
    this.title='';
    this.image='';
    this.start_day='';
    this.end_day='';
    this.description='';
    this.show_event=false;

  }


}
