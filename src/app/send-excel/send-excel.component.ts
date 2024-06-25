import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-send-excel',
  templateUrl: './send-excel.component.html',
  styleUrls: ['./send-excel.component.css']
})
export class SendExcelComponent {
  subject='';
  text='';

 

  

  label='Email';
  
  show_event=false;
  close_dialog(){
    
    this.show_event=false;

  }
  emails:string[]=[];
  message='';
  title='';

  onFileSelected(event: any): void {

    const file = event.target.files[0];

    if (file) {
      this.emails=[];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const binaryData = e.target.result;
        const workbook = XLSX.read(binaryData, { type: 'binary' });
        const sheetName = workbook.SheetNames[0]; // Vous pouvez spécifier le nom de la feuille que vous souhaitez lire

        const worksheet = workbook.Sheets[sheetName];
        const data:any = XLSX.utils.sheet_to_json(worksheet, { header: 1 });



        for (let i = 0; i < data.length; i++) {
          const email = data[i][0]; 
          if (email && typeof email === 'string') {
            this.emails.push(email);
          }
        }
        let verif=true;
        this.emails.forEach(email => {
          if(this.verif_email(email)==false){
            verif=false;

          }
          
        });
        if(verif==true){
          this.title='Congrats'
          this.message='Votre liste est prete, si vous voulez modifiez la liste veuillez refresher la page et ressayer une autre fois';

        }
        else{
          this.title='Error'
          this.message='Verifiez ton liste, refreshez la page et ressayez une autre fois ';
        }
        this.show_event=true;
        
        

      };

      reader.readAsBinaryString(file);

      


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
  show_event2=false;
  send_mail(){
    
    if (this.emails.length!=0 && this.subject!='' && this.text!='')
    console.log("to "+this.emails);
    console.log("subj "+this.subject);
    console.log("text "+this.text);
    this.emails.forEach(email => {
      emailjs.init('iQPAvdMoj37X1rb-t');
      emailjs.send("service_7c8j1b9","template_x8wu53m",{
      to_name: this.subject,
      message: this.text,
      destination: email,
    });
      
    });
  
    this.title="about your messages";
    this.message='messages sent successfully';
    this.show_event2=true;
    
  }

  annuler(){
    this.show_event=false;
    this.message='';
    this.title='';
    this.subject='';
    this.text='';
    this.emails.splice(0,this.emails.length);
    
    
  }


}
