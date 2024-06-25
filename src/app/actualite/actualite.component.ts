import { Component, ElementRef } from '@angular/core';
import { ActualiteService } from '../actualite.service';
import { ImageService } from '../image.service';
import { actualite } from 'src/actualite';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent {
  constructor(private el: ElementRef,private ActualiteServiceService:ActualiteService,private imagekitService: ImageService,private cookieService: CookieService,private router: Router){}
  p: number = 1;
  tab: number = 4;

  actualites_not_traited:string[]=[];
  actualites:string[]=[];

  title='';
  text='';
  img='assets/image/default.png';
  
  

  ngOnInit(): void {

    const isIdentified = this.cookieService.get('identified') === 'true';
    if (!isIdentified) {
      this.router.navigate([`/login`]);
    }



    const loader = document.getElementById('loader_div');
    const act = document.getElementById('act');
    const new_act = document.getElementById('new_act');
    const edit_act = document.getElementById('edit_act');

     if ( new_act && edit_act && act && loader) {
          new_act.style.display = 'none';
          edit_act.style.display = 'none';
          act.style.display = 'none';
          loader.style.display = 'block';

        }
    
    
    
    this.title='';
    this.text='';
    this.img='assets/image/default.png';
    this.actualites.splice(0,this.actualites.length);
    this.ActualiteServiceService.get_actualite().subscribe(
      (data:any)=>{
        if ( act && loader) {
          
          act.style.display = 'block';
          loader.style.display = 'none';
        }
        this.actualites_not_traited=data.values;        
        for(let i =1 ; i<this.actualites_not_traited.length;i++){
          this.actualites.push(this.actualites_not_traited[i]);
        }
        
      }
    )
  }
  delete(title:string){
    const act = document.getElementById('act');
    const loader = document.getElementById('loader_div');
  
  
      if (loader && act) {
        loader.style.display = 'block';
        act.style.display = 'none';
      }

    this.ActualiteServiceService.delete_contact(title).subscribe(
      (data)=>{
        if (loader && act) {
          loader.style.display = 'none';
          act.style.display = 'block';
        }
        console.log(data);
        this.ngOnInit();
      }
    )
  }
  act_to_add(){
    this.title='';
    this.text='';
    this.img='assets/image/default.png';
    
    const act = document.getElementById('act');
    const new_act = document.getElementById('new_act');
    const edit_act = document.getElementById('edit_act');

    
    if (new_act && act && edit_act) {
      new_act.style.display = 'block';
      //act.style.display = 'none';
      edit_act.style.display='none';
      
    }
    const targetElement = this.el.nativeElement.querySelector('#new_act');

    // Faire défiler l'élément vers le bas
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });

  }
  annuler(){
    const act = document.getElementById('act');
    const new_act = document.getElementById('new_act');
    const edit_act = document.getElementById('edit_act');

    
    if (new_act && act && edit_act) {
      new_act.style.display = 'none';
      act.style.display = 'block';
      edit_act.style.display='none';
      
    }
    this.title='';
    this.text='';
    this.img='assets/image/default.png';
    const targetElement = this.el.nativeElement.querySelector('#act');

    // Faire défiler l'élément vers le bas
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });


  }


  
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const loader = document.getElementById('loader_div');
    const new_act = document.getElementById('new_act');
    const edit_act = document.getElementById('edit_act');
    let showEdit = false;
    let showNew = false;
  
    if (loader && new_act && edit_act) {
      if (edit_act.style.display === 'block') {
        edit_act.style.display = 'none';
        showEdit = true;
      }
      if (new_act.style.display === 'block') {
        new_act.style.display = 'none';
        showNew = true;
      }
      loader.style.display = 'block';
    }
  
    if (file) {
      this.imagekitService.uploadImage(file).subscribe(
        (response: any) => {
          console.log('Image uploaded successfully:', response);
          this.img = response.data.display_url;
  
          if (loader && new_act && edit_act) {
            loader.style.display = 'none';
            if (showEdit) {
              edit_act.style.display = 'block';
            }
            if (showNew) {
              new_act.style.display = 'block';
            }
          }
        },
        (error) => {
          console.error('Error uploading image:', error);
          
        }
      );
    }
  }



  add_actualite() {
    if (this.img !== '' && this.title !== '' && this.text !== '') {
      let new_act: actualite = {
        Title: '',
        Text: '',
        Image: ''
      };
      new_act.Title = this.title;
      new_act.Image = this.img;
      new_act.Text = this.text;
  
      const act = document.getElementById('act');
      const loader = document.getElementById('loader_div');
      const new_actu = document.getElementById('new_act');
  
  
      if (loader && new_actu && act) {
        new_actu.style.display = 'none';
        loader.style.display = 'block';
        act.style.display = 'none';
      }
  
      this.ActualiteServiceService.add_actualite(new_act).subscribe(
        (data) => {
          if (loader && new_actu && act) {
            new_actu.style.display = 'none';
            loader.style.display = 'none';
            act.style.display = 'block';
          }
          console.log(data);
          this.ngOnInit();
        },
        (error) => {
          console.error('Error adding actualite:', error);
         
        }
      );
    }
  }




  

  traited_edit(title:string,text:string,image:string){
    const act = document.getElementById('act');
    const new_act = document.getElementById('new_act');
    const edit_act = document.getElementById('edit_act');

    
    if (new_act && act && edit_act) {
      new_act.style.display = 'none';
      //act.style.display = 'none';
      edit_act.style.display='block';
      
    }
    const targetElement = this.el.nativeElement.querySelector('#edit_act');

    // Faire défiler l'élément vers le bas
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    this.title=title;
    this.text=text;
    this.img=image;

  }
  submit_edit(){
    const act = document.getElementById('act');
      const loader = document.getElementById('loader_div');
      const edit_act = document.getElementById('edit_act');
  
  
      if (loader && edit_act && act) {
        edit_act.style.display = 'none';
        loader.style.display = 'block';
        act.style.display = 'none';
      }
    if(this.img!=''  && this.text!=''){
      
      let new_act:actualite={
        Title: '',
        Text: '',
        Image: ''
      };
      new_act.Title=this.title;
      new_act.Image=this.img;
      new_act.Text=this.text;
      this.ActualiteServiceService.modify_actualite(new_act).subscribe(
        (data)=>{
          if (loader && edit_act && act) {
            edit_act.style.display = 'none';
            loader.style.display = 'none';
            act.style.display = 'block';
          }
          console.log(data);
          this.ngOnInit();
        }
      )


    }



  }






}
