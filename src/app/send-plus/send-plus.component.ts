import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-send-plus',
  templateUrl: './send-plus.component.html',
  styleUrls: ['./send-plus.component.css']
})
export class SendPlusComponent {
  subject='';
  text='';

 

  

  label='Email';
  
  show_event=false;
  close_dialog(){
    
    this.show_event=false;

  }
  message='';
  title='';
  chips: string[] = [];
  newChip: string = '';

  addChip() {
    if (this.newChip.trim() !== '' && this.verif_email(this.newChip)) {
      this.chips.push(this.newChip.trim());
      this.newChip = '';
    }
  }

  removeChip(chip: string) {
    const index = this.chips.indexOf(chip);
    if (index !== -1) {
      this.chips.splice(index, 1);
    }
  }

  

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
    
    if(  this.chips.length!=0 && this.subject!='' && this.text!=''){
      console.log("to "+this.chips);
    console.log("subj "+this.subject);
    console.log("text "+this.text);
    this.chips.forEach(email => {
      emailjs.init('iQPAvdMoj37X1rb-t');
    emailjs.send("service_7c8j1b9","template_x8wu53m",{
      to_name: this.subject,
      message: this.text,
      destination: email,
      });
      
    });
    this.title="about your messages";
    this.message='messages sent successfully';
    this.show_event=true;
    }
    
  }

  annuler(){
    this.show_event=false;
    this.message='';
    this.title='';
    this.subject='';
    this.text='';
    this.chips.splice(0,this.chips.length);
    console.log(this.chips)
    
  }

}
