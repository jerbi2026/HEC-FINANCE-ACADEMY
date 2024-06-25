import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-send-one',
  templateUrl: './send-one.component.html',
  styleUrls: ['./send-one.component.css']
})
export class SendOneComponent {
  subject='';
  text='';

 

  

  label='Email';
  
  show_event=false;
  close_dialog(){
    
    this.show_event=false;

  }
  newChip: string = '';

  message='';
  title='';

  

  verif_email(email:string):boolean{
    let ok=false;

    if(email.includes('@') && email.includes('.')&& ((email.charAt(0)>='a' &&email.charAt(0)<='z')||(email.charAt(0)>='A' &&email.charAt(0)<='Z')) &&((email.charAt(email.length-1)>='a' &&email.charAt(email.length-1)<='z')||(email.charAt(email.length-1)>='A' &&email.charAt(email.length-1)<='Z')) && ((email.charAt(email.indexOf('@')+1)>='a' &&email.charAt(email.indexOf('@')+1)<='z')||(email.charAt(email.indexOf('@')+1)>='A' &&email.charAt(email.indexOf('@')+1)<='Z')) ){
      this.label='Email';
      ok=true;
    
    }     
    else{
      
      this.label='Email non valide'
      
      ok=false;

    } 
    return ok;

  }

  send_mail(){
    if( this.newChip!='' && this.subject!='' && this.text!=''){
      console.log("to "+this.newChip);
      console.log("subj "+this.subject);
      console.log("text "+this.text);
      emailjs.init('iQPAvdMoj37X1rb-t');
      emailjs.send("service_7c8j1b9","template_x8wu53m",{
        to_name: this.subject,
        message: this.text,
        destination: this.newChip,
        });
      this.title="about your message";
      this.message='message sent successfully';
      this.show_event=true;


    }
    
   
    
  }

  annuler(){
    this.show_event=false;
    this.message='';
    this.title='';
    this.subject='';
    this.text='';
    this.newChip='';
    
  }


}
