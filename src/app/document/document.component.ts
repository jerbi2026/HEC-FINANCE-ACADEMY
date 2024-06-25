import { Component } from '@angular/core';
import { FileService } from '../file.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {

  constructor(private fileservice:FileService,private cookieService: CookieService,private router: Router){}
  document_not_traited:string[]=[];
  document:string[]=[];
  
  ngOnInit(): void {
    const isIdentified = this.cookieService.get('identified') === 'true';
    if (!isIdentified) {
      this.router.navigate([`/login`]);
    }
    const doc = document.getElementById('doc');
    const loader = document.getElementById('loader_div');
    if (loader && doc) {
      loader.style.display = 'block';
      doc.style.display = 'none';
    }


    this.fileservice.get_documents().subscribe(
      (data:any)=>{
        this.document_not_traited=data.values;        
        for(let i =1 ; i<this.document_not_traited.length;i++){
          this.document.push(this.document_not_traited[i]);
        }
        if (loader && doc) {
          loader.style.display = 'none';
          doc.style.display = 'block';
        }
      }
    )
  }

  download(path:string,title:string,type:string) {
    this.fileservice.downloadFile(path).subscribe((data: Blob) => {
      const blob = new Blob([data], { type: 'application/octet-stream' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = title.toLowerCase()+'.'+type;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

}
