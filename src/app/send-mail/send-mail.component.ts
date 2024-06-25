import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit{

  constructor(private cookieService: CookieService,private router: Router){}



  ngOnInit(): void {
    const isIdentified = this.cookieService.get('identified') === 'true';
    if (!isIdentified) {
      this.router.navigate([`/login`]);
    }

  }
  option='seul';

}
